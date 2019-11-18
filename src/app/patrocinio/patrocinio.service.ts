import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Patrocinio } from "./patrocinio";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const API_URL = environment.apiURL;
const patrocinios = "/patrocinios";

@Injectable()
export class PatrocinioService {

  constructor(private http: HttpClient) {}

  getPatrocinios():Observable <Patrocinio[]>
  {
    return this.http.get<Patrocinio[]>(API_URL+patrocinios);
  }
}