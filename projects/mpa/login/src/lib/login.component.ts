import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'lib-login',
  template: `
    <h2>Login</h2>
    <p>
      <button (click)="login()">Login</button>
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { 
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['dashboard']);
  }
}
