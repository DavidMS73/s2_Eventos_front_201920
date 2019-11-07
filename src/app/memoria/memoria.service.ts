import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Memoria } from './memoria';
import { Observable } from 'rxjs';

//const API_URL = '../../assets/';
//const memorias = 'memorias.json';
const API_URL = 'http://localhost:8080/s2_eventos-api/api/';
const memorias = 'memorias';

@Injectable()
export class MemoriaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getMemorias() : Observable<Memoria[]> {
        return this.http.get<Memoria[]>(API_URL + memorias);
    }

    createMemoria(): Observable<Memoria> {
      return this.http.post<Memoria>(API_URL + memorias,
        {
          "lugar":"Bogota",
          "fecha":"2020-09-10T05:00:00Z[UTC]",
          "evento":{
            "id": 8,
            "nombre": "Futbol",
            "descripcion": "..."
          }
          
        }
      );
    } 


}