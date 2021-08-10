import { NgModule } from '@angular/core';
import { SharedModule } from '@mpa/shared';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent, HelloWorldComponent],
  imports: [NgbModalModule, LoginRoutingModule, SharedModule.forRoot()],
  exports: [LoginComponent],
})
export class LoginModule {}
