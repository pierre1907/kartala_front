import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Programme } from '../../../core/programme';

@Component({
  selector: 'app-ajout-pgr',
  standalone: true,
  imports: [],
  templateUrl: './ajout-pgr.component.html',
  styleUrl: './ajout-pgr.component.css'
})
export class AjoutPgrComponent {
  pgr: Programme = {
    id: 0,
    nom: '',
    duree: '',
    dateDebut: '',
    dateFin: '',
    budget: ''
  };
  constructor(
    private location: Location,

  ) {

  }
  onSubmit() {
    // Logique à exécuter lors de la soumission du formulaire
    console.log(this.pgr);
    // Vous pouvez envoyer les données à un service ou effectuer d'autres opérations ici
  }

  return() {
    this.location.back();
  }
}
