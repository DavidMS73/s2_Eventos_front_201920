import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MedioDePago } from "./medioDePago";
import { Observable } from "rxjs";
import { Tarjeta } from "./tarjeta/tarjeta";
import { environment } from "../../environments/environment";
import { Pse } from "./pse/pse";


const API_URL = environment.apiURL;
const usuarios = '/usuarios';
const mediosDepago = "medioDePago.json";
const tarjetas = '/tarjetas';
const pse = '/pse';

@Injectable()
export class MedioDePagoService {
  constructor(private http: HttpClient) { }

  getMediosDePago(): Observable<MedioDePago[]> {
    return this.http.get<MedioDePago[]>(API_URL + mediosDepago);
  }

  createTarjeta(tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(API_URL + usuarios + '/' + localStorage.getItem('id') + tarjetas, tarjeta);
  }

  getTarjetas(): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(API_URL + usuarios + '/' + localStorage.getItem('id') + tarjetas);
  }

  createPse(ps): Observable<Pse> {
    return this.http.post<Pse>(API_URL + usuarios + '/' + localStorage.getItem('id') + pse, ps);
  }

}