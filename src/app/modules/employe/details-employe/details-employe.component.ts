import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../../../core/employe';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-employe',
  standalone: true,
  imports: [],
  templateUrl: './details-employe.component.html',
  styleUrl: './details-employe.component.css'
})
export class DetailsEmployeComponent {
  employe?: Employe;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {
    this.getEmployeDetails();

  }

  getEmployeDetails(): void {
    const idString = this.activatedRoute.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = +idString;
      // Ici, vous devrez récupérer les détails de l'employé avec l'ID donné depuis votre service ou votre source de données
      // Par exemple, vous pouvez appeler une méthode dans votre service qui renvoie les détails de l'employé en fonction de l'ID
      // Une fois que vous avez les détails de l'employé, affectez-les à la propriété this.employe
      // Ici, pour la démo, j'ai initialisé manuellement les détails de l'employé
      this.employe = {
        id: id,
        nom: 'Doe',
        prenom: 'John',
        fonction: 'Développeur',
        dateEmbauche: new Date('2022-01-01'),
        dateFinContrat: new Date('2023-01-01'),
        age: 30,
        sexe: true,
        statutMatrimonial: 'Célibataire',
        niveauEducation: 'Bac+5',
        activites: ['Lecture', 'Sport']
      };
    }
  }


  return() {
    this.location.back();
  }
}
