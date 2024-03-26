import { Component } from '@angular/core';
import { Activite } from '../../../core/activite';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-activite',
  standalone: true,
  imports: [],
  templateUrl: './details-activite.component.html',
  styleUrl: './details-activite.component.css'
})
export class DetailsActiviteComponent {
  activite: any;

  constructor(
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.activite = {
      libelle: 'Activité 1',
      dureeExecution: 10,
      dateDebut: '2024-03-01',
      dateFin: '2024-03-10',
      budgetAlloue: 5000
    };
  }

  return() {
    this.location.back();
  }
}
