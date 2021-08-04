import { Injectable, Optional } from '@angular/core';
import { ConfigurationService, Configuration } from '@mpa/configuration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Optional() private configurationService: ConfigurationService) {
    if (this.configurationService) {
      this.configurationService.settings$.subscribe((settings: Configuration) => {
        console.log('[LoginService] - settings: ', settings);
      });
    }
  }
}
