import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@mpa/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private sharedService: SharedService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    console.log('----------');
    console.log(
      'able to inject shared service in modal component: ',
      this.sharedService
    );
    console.log(
      'able to inject login service in modal component: ',
      this.loginService
    );
    console.log('----------');
  }

  @Input()
  name: string = '';
}
