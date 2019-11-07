import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

//const API_URL = '../../assets/';
//const lugares = 'lugares.json';

const API_URL = 'http://localhost:8080/s2_eventos-api/api/';
const lugares = 'lugares';

@Injectable()
export class LugarService 
{

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  getLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(API_URL + lugares);
  }

  createLugar(): Observable<Lugar> {
    return this.http.post<Lugar>(API_URL + lugares,
      {
        "id" : "1",
        "capacidadAsistentes": "100",
        "ubicacionGeografica": "Bogota",
        "bloque" : "ML",
        "piso": "primer piso",
        "salon": "auditorio",
        "nombre" : "auditorio Mario Laserna"
        }
    );
  }
}