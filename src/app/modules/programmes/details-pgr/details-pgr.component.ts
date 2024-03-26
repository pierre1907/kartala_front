import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details-pgr',
  standalone: true,
  imports: [],
  templateUrl: './details-pgr.component.html',
  styleUrl: './details-pgr.component.css'
})
export class DetailsPgrComponent {

  activite: any;
  constructor(
    private location: Location
  ) {
  }

  ngOnInit(): void {
     this.activite = {
      libelle: 'Activité 1',
      duree: 10,
      dateDebut: '2024-03-01',
      dateFin: '2024-03-10',
      budget: 5000
    };
  }
  goBack() {
    this.location.back();

  }
}
