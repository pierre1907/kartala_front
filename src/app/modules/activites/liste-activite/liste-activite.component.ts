import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Activite } from '../../../core/activite'
@Component({
  selector: 'app-liste-activite',
  standalone: true,
  imports: [],
  templateUrl: './liste-activite.component.html',
  styleUrl: './liste-activite.component.css'
})
export class ListeActiviteComponent {

  activites: any[] = [];
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activites = [
      {
        libelle: 'Activité 1',
        dureeExecution: 10,
        dateDebut: '2024-03-01',
        dateFin: '2024-03-10',
        budgetAlloue: 5000
      },
      {
        libelle: 'Activité 2',
        dureeExecution: 15,
        dateDebut: '2024-03-01',
        dateFin: '2024-03-10',
        budgetAlloue: 5000
      },
      {
        libelle: 'Activité 3',
        dureeExecution: 20,
        dateDebut: '2024-03-01',
        dateFin: '2024-03-10',
        budgetAlloue: 5000
      }
    ];
  }

  addActivite() {
    this.router.navigateByUrl('activite/ajout-activite');
  }


  deleteActivite() {
    if(confirm('Voulez-vous vraiment supprimer cette activité ?')) {
      alert('Activité supprimée avec succès !');
    }
  }


  viewActivite() {
    this.router.navigateByUrl('activite/activite/ + this.activites[0].id);');
  }
}
