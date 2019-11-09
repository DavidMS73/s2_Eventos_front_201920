import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Patrocinio } from "./patrocinio";

import { Observable } from "rxjs";

const API_URL = "../../assets/";
const patrocinios = "patrocinios.json";

@Injectable()
export class PatrocinioService {

  constructor(private http: HttpClient) {}

  getPatrocinios():Observable <Patrocinio[]>
  {
    return this.http.get<Patrocinio[]>(API_URL+patrocinios);
  }
}