export class Employe {
  id?: number;
  nom?: string;
  prenom?: string;
  fonction?: string;
  dateEmbauche?: Date;
  dateFinContrat?: Date;
  age?: number;
  sexe?: boolean;
  statutMatrimonial?: string;
  niveauEducation?: string;
  activites?: string[];

  constructor(
    id: number,
    nom: string,
    prenom: string,
    fonction: string,
    dateEmbauche: Date,
    dateFinContrat: Date,
    age: number,
    sexe: boolean,
    statutMatrimonial: string,
    niveauEducation: string,
    activites: string[]

  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.fonction = fonction;
    this.dateEmbauche = dateEmbauche;
    this.dateFinContrat = dateFinContrat;
    this.age = age;
    this.sexe = sexe;
    this.statutMatrimonial = statutMatrimonial;
    this.niveauEducation = niveauEducation;
    this.activites = activites;
    }

}

