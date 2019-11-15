import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./usuario";
import { Tarjeta } from "./tarjeta";
import { Observable } from "rxjs";

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const usuarios = "/usuarios";
const tarjetas = "/tarjetas";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }

  createUsuario(usuario): Observable<Usuario> {
    return this.http.post<Usuario>(API_URL + usuarios, usuario);
  }

  createTarjeta(usuarioId, tarjeta): Observable<Tarjeta>{
    return this.http.post<Tarjeta>(API_URL + usuarios + '/' + usuarioId + tarjetas, tarjeta);
  }
}