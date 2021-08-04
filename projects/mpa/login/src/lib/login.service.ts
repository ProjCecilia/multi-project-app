import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService, Configuration, ApiConfiguration } from '@mpa/configuration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiSettings: ApiConfiguration = {} as ApiConfiguration;
  
  constructor(/*private http: HttpClient, */private configurationService: ConfigurationService) {
    this.configurationService.settings$.subscribe((settings: Configuration) => {
      console.log('[LoginService]: ', settings.api);
      this.apiSettings = settings.api;
    });
  }

  login() {
    const { url } = this.apiSettings;
    // return this.http.post(url, JSON.stringify({username: 'test', password: 'test'}));
  }
}
