import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./usuario";
import { UsuarioDetail } from "./usuario-detail";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const usuarios = "usuarios.json";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }

  getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(API_URL + "evento-" + usuarioId + ".json"
    );
  }
}