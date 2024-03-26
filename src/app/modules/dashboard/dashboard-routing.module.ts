import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashComponent } from './main-dash/main-dash.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainDashComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
