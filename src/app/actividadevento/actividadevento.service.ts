import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActividadEvento } from './actividadevento';
import { Observable } from 'rxjs';

//const API_URL = '../../assets/';
//const memorias = 'memorias.json';
const API_URL = 'http://localhost:8080/s2_eventos-api/api/eventos/';
//const evento_id = "1"
const actividades = '/actividades';

@Injectable()
export class ActividadEventoService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  getActividadesEvento(): Observable<ActividadEvento[]> {
    return this.http.get<ActividadEvento[]>(API_URL + actividades);
  }

  createActividad(actividad): Observable<ActividadEvento> {
    return this.http.post<ActividadEvento>(API_URL + actividad.evento.id.toString() + actividades,
      actividad);
  }

  /**
   * Elimina una actividad de evento
   * @param actividaDeEventoId Id de la actividad de evento
   * @returns True if el evento fue eliminado, false en otro caso
   */
  deleteActividadEvento(actividadDeEventoId): Observable<ActividadEvento> {
    return this.http.delete<ActividadEvento>(API_URL + actividades + "/" + actividadDeEventoId);
  }


}