import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

}
