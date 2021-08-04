import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./project-routes/login-wrapper.module').then(m => m.LoginWrapperModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./project-routes/dashboard-wrapper.module').then(m => m.DashboardWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
