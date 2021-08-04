import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    LoginRoutingModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
