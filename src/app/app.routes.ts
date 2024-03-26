import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'employes', component: EmployesComponent },
  //{ path: 'programmes', component: ProgrammesComponent },
  //{ path: 'activites', component: ActivitesComponent },
  //{ path: 'poles', component: PolesComponent },
  {
    path: 'employe',
    loadChildren: () => import('./modules/employe/employe.module').then(m => m.EmployeModule)
  },
  {
    path: 'pgr',
    loadChildren: () => import('./modules/programmes/programmes.module').then(m => m.ProgrammesModule)
  },
  {
    path: 'pole',
    loadChildren: () => import('./modules/poles/poles.module').then(m => m.PolesModule)
  },
  {
    path: 'activite',
    loadChildren: () => import('./modules/activites/activites.module').then(m => m.ActivitesModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }


];
