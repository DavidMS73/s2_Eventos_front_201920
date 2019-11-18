import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from './tarjeta';
import { environment } from "../../environments/environment";

const API_URL = environment.apiURL;
const tarjetas = "/tarjetas";

@Injectable()
export class TarjetaService {

    constructor(private http: HttpClient) { }

    getTarjetas(): Observable<Tarjeta[]> {
        return this.http.get<Tarjeta[]>(API_URL + tarjetas);
    }

}