import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Programme } from '../../../core/programme';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-programmes',
  templateUrl: './liste-pgr.component.html',
  styleUrls: ['./liste-pgr.component.css']
})
export class ListePgrComponent {
  programmes :Programme[] = [];

  constructor(
    private router:Router,
    //private pgrService:PgrService,
    private activatedroute: ActivatedRoute,
   ) {}

  ngOnInit() {
  }

  goToAddPgr() {
    this.router.navigateByUrl('pgr/ajout-programme');
  }

  viewProgramme() {
    this.router.navigateByUrl('pgr/programme/ + this.programmes[0].id);');
  }

  deleteProgramme() {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette activité ?')) {
      // Implémentez la logique de suppression ici
      console.log('Activité supprimée');

      // Afficher une notification de suppression
     }
  }
}
