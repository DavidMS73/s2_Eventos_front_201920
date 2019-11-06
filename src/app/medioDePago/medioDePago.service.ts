import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MedioDePago } from "./medioDePago";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const mediosDepago = "medioDePago.json";

@Injectable()
export class MedioDePagoService {
  constructor(private http: HttpClient) {}

  getMediosDePago(): Observable<MedioDePago[]> {
    return this.http.get<MedioDePago[]>(API_URL +mediosDepago);
  }

  
}