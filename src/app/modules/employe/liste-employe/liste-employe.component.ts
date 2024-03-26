import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Employe } from '../../../core/employe';
import {ActivatedRoute, Router} from "@angular/router";
import { EmployeService } from '../../../core/services/employe.service';


@Component({
  selector: 'app-liste-employe',
  standalone: true,
  imports: [],
  templateUrl: './liste-employe.component.html',
  styleUrl: './liste-employe.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListeEmployeComponent {

  employes: Employe[] = [];

  constructor(
    private router:Router,
    private empService:EmployeService,
    private activatedroute: ActivatedRoute
  ) {
   }
  ngOnInit() {

    this.getEmployes();

  }

  private getEmployes() {
    this.empService.getAllEmployes().subscribe((data: any) => {
      this.employes = data;
    });
  }


  viewEmployee() {
    this.router.navigateByUrl('employe/employe/ + this.employes[0].id);');
  }

  deleteEmployee( ) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      // Implémentez la logique de suppression ici
      console.log('Employé supprimé avec succès');

    }
  }



  goToAddEmp() {
    this.router.navigateByUrl('employe/ajout-employe');
  }
}
