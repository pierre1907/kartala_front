import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPgrComponent } from './details-pgr/details-pgr.component';
import { AjoutPgrComponent } from './ajout-pgr/ajout-pgr.component';
import { ListePgrComponent } from './liste-pgr/liste-pgr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-programme',
    pathMatch: 'full'
  },
  {
    path: 'liste-programme',
    component: ListePgrComponent,
  },
  {
    path:'ajout-programme',
    component: AjoutPgrComponent,
  },

  {
    path: 'programme/:id',
    component: DetailsPgrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammesRoutingModule { }
