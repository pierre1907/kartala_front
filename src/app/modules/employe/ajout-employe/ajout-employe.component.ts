import { Component } from '@angular/core';
import { Employe } from '../../../core/employe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajout-employe',
  standalone: true,
  imports: [],
  templateUrl: './ajout-employe.component.html',
  styleUrl: './ajout-employe.component.css'
})
export class AjoutEmployeComponent {
  employe: Employe = {};

  constructor(
    private location: Location
  ) {

  }

  onSubmit() {
    // Logique à exécuter lors de la soumission du formulaire
    console.log(this.employe);
    // Vous pouvez envoyer les données à un service ou effectuer d'autres opérations ici
  }

  return() {
    this.location.back();
  }
}
