import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

//const API_URL = '../../assets/';
//const lugares = 'lugares.json';

//const API_URL = 'http://localhost:8080/s2_eventos-api/api/';
const API_URL = environment.apiURL;

const lugares = '/lugares';

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

  createLugar(lugar): Observable<Lugar> {
    return this.http.post<Lugar>(API_URL + lugares,lugar);
  }
  /**
   * Actualiza un nuevo lugar
   * @param lugar El lugar actualizado
   * @returns El lugar actualizado
   */
  updateLugar(lugar): Observable<Lugar> {
    return this.http.put<Lugar>(API_URL + lugares + "/" + lugar.id, lugar);
  }

  /**
   * Elimina un lugar
   * @param lugarId Id del lugar
   * @returns True if el lugar fue eliminado, false en otro caso
   */
  deleteLugar(lugarId): Observable<Lugar> {
    return this.http.delete<Lugar>(API_URL + lugares + "/" + lugarId);
  }
}