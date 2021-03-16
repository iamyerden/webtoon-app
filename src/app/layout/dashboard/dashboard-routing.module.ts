import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompositionTabComponent} from './composition-tab/composition-tab.component';
import {CompositionDetailComponent} from './composition-detail/composition-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'explore/:tab',
    component: CompositionTabComponent
  },
  {
    path: 'composition/:titleCode/list',
    component: CompositionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
