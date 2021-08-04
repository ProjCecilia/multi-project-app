import { Injectable } from '@angular/core';
import { ApiConfiguration, ConfigurationService, Configuration } from '@mpa/configuration';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiSettings: ApiConfiguration = {} as ApiConfiguration;
  
  constructor(private configurationService: ConfigurationService) {
    this.configurationService.settings$.subscribe((settings: Configuration) => {
      console.log('[Dashboard]: ', settings.api);
      this.apiSettings = settings.api;
    });
  }
}
