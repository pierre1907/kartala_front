import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/env';
import { Observable } from 'rxjs';
import { Employe } from '../employe';


const baseUrl=`${env.api}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  //private baseUrl = `${env.api}/employes;`;


  constructor(
    private httpClient: HttpClient
  ) { }

  getAllEmployes():Observable<Employe[]>{
    return this.httpClient.get<Employe[]>(`${baseUrl}/api/v1/employes`);
  }


}
