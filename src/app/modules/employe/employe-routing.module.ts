import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-employe',
    pathMatch: 'full'
  },
  {
    path: 'liste-employe',
    component: ListeEmployeComponent,
  },
  {
    path:'ajout-employe',
    component: AjoutEmployeComponent,
  },

  {
    path: 'employe/:id',
    component: DetailsEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
