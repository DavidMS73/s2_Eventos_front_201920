import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Pago} from './pago';
const API_URL = environment.apiURL;
const pagos = "/pagos";
@Injectable()
export class PagoService {

    constructor(private http: HttpClient) { }
    
    getPagos(): Observable<Pago[]> {
        return this.http.get<Pago[]>(API_URL + pagos);
      }
}