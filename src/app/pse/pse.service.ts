import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pse } from "./pse";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const mediosDepago = "pses.json";

@Injectable()
export class PseService {
  constructor(private http: HttpClient) { }

  getPses(): Observable<Pse[]> {
    return this.http.get<Pse[]>(API_URL + mediosDepago);
  }

}