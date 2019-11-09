import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./usuario";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const usuarios = "usuarios.json";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }

}