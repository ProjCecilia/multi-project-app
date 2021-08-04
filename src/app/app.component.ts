import { Component } from '@angular/core';
import { ConfigurationService } from '@mpa/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private configurationService: ConfigurationService) {}
  title = 'muti-project-app';
}
