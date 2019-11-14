import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from './tarjeta';


const API_URL = '../../assets/';
const tarjetas = '/tarjetas.json';

@Injectable()
export class TarjetaService {

    constructor(private http: HttpClient) { }

    getTarjetas(): Observable<Tarjeta[]> {
        return this.http.get<Tarjeta[]>(API_URL + tarjetas);
    }

}