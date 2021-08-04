import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationModule } from '@mpa/configuration';
import { config } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigurationModule.forRoot({
      config
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
