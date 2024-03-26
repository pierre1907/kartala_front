export class Activite {
  libelle: string;
  dureeExecution: number;
  dateDebut: Date;
  dateFin: Date;
  budgetAlloue: number;

  constructor(
    libelle: string,
    dureeExecution: number,
    dateDebut: Date,
    dateFin: Date,
    budgetAlloue: number
  ) {
    this.libelle = libelle;
    this.dureeExecution = dureeExecution;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.budgetAlloue = budgetAlloue;
  }
}
