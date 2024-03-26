export class Programme {
  id: number;
  nom: string;
  duree: string;
  dateDebut: string;
  dateFin: string;
  budget: string;

  constructor(
    id: number, 
    nom: string, 
    duree: string, 
    dateDebut: string, 
    dateFin: string, 
    budget: string
  ) {
    this.id = id;
    this.nom = nom;
    this.duree = duree;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.budget = budget;
  }
}
