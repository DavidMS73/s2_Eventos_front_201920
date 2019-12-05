import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActividadEvento } from './actividadevento';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';

//const API_URL = '../../assets/';
//const memorias = 'memorias.json';
const API_URL = 'http://localhost:8080/s2_eventos-api/api/eventos/';
//const evento_id = "1"
const actividades = /*evento_id + */'/actividadesevento';

@Injectable()
export class ActividadEventoService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  getActividades(): Observable<ActividadEvento[]> {
    return this.http.get<ActividadEvento[]>(API_URL + actividades);
  }

  createActividad(actividad): Observable<ActividadEvento> {
    return this.http.post<ActividadEvento>(API_URL + actividad.evento.id.toString() + actividades,
    actividad  
    /*{
        "lugar": "Bogota",
        "fecha": "2020-09-10T05:00:00Z[UTC]",
        "evento": {
          "id": 8,
          "nombre": "Futbol",
          "descripcion": "..."
        },
        "imagen":"..."

      }*/
    );
  }


}