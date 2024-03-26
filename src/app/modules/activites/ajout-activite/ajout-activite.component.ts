import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Activite } from '../../../core/activite';
@Component({
  selector: 'app-ajout-activite',
  standalone: true,
  imports: [],
  templateUrl: './ajout-activite.component.html',
  styleUrl: './ajout-activite.component.css'
})
export class AjoutActiviteComponent {

  //activites: Activite = {};

  constructor(
    //private activiteService: ActiviteService,
    private location: Location
  ) {}


  onSubmit() {
    console.log("Ajout effectué");
  }

  return() {
    this.location.back();
  }
}
