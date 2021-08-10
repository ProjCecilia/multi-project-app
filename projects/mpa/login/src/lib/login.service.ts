import { Injectable, Optional } from '@angular/core';
import {
  ConfigurationService,
  Configuration,
  ApiConfiguration,
} from '@mpa/configuration';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiSettings: ApiConfiguration = {} as ApiConfiguration;

  constructor(private configurationService: ConfigurationService) {
    this.configurationService.settings$.subscribe((settings: Configuration) => {
      console.log('[LoginService]: ', settings.api);
      this.apiSettings = settings.api;
    });
  }

  login() {
    const { url } = this.apiSettings;
    // make POST call here.
  }
}
