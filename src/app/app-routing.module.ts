import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(dashboardModule => dashboardModule.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(authModule => authModule.AuthModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./layout/account/account.module').then(accountModule => accountModule.AccountModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
