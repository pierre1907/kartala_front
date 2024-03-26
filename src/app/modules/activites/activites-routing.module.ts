import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutActiviteComponent } from './ajout-activite/ajout-activite.component';
import { DetailsActiviteComponent } from './details-activite/details-activite.component';
import { ListeActiviteComponent } from './liste-activite/liste-activite.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'liste-activite',
      pathMatch: 'full'
    },
    {
      path: 'liste-activite',
      component: ListeActiviteComponent
    },
    {
      path: 'ajout-activite',
      component: AjoutActiviteComponent
    },
    {
      path: 'activite/:id',
      component: DetailsActiviteComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitesRoutingModule { }
