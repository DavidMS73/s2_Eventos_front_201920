import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pse } from "./pse";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

const API_URL = environment.apiURL;
const pses = "/pses";

@Injectable()
export class PseService {
  constructor(private http: HttpClient) { }

  getPses(): Observable<Pse[]> {
    return this.http.get<Pse[]>(API_URL + pses);
  }

}