import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from './Configuration';
import { ConfigurationContext } from './ConfigurationContext';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private settings = new BehaviorSubject<Configuration>({} as Configuration);
  settings$ = this.settings.asObservable();

  constructor(@Optional() context: ConfigurationContext) {
    if (context) {
      this.settings.next(context.config);
    }
  }
}
