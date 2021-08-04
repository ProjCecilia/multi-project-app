import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dashboard',
  template: `
    <h2>
      Welcome to Dashboard
    </h2>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
