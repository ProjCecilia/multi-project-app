import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@mpa/shared';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { LoginService } from './login.service';

@Component({
  selector: 'lib-login',
  template: `
    <h2>Login</h2>
    <p>
      <button (click)="login()">Login</button>
    </p>
    <p>
      <button (click)="openModal()">Open Modal</button>
    </p>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['dashboard']);
  }

  openModal() {
    this.sharedService.openModal(HelloWorldComponent);
  }
}
