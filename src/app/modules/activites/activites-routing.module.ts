import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeActiviteComponent } from './liste-activite/liste-activite.component';
import { AjoutActiviteComponent } from './ajout-activite/ajout-activite.component';
import { DetailsActiviteComponent } from './details-activite/details-activite.component';

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
      path: 'details-activite',
      component: DetailsActiviteComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitesRoutingModule { }
