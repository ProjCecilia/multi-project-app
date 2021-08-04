import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationContext } from './ConfigurationContext';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [CommonModule],
  exports: [ConfigurationComponent]
})
export class ConfigurationModule {
  static forRoot(context: ConfigurationContext): ModuleWithProviders<ConfigurationModule> {
    return {
      ngModule: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationContext,
          useValue: context
        }
      ]
    }
  }
}
