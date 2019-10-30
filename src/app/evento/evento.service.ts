import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Evento } from "./evento";
import { EventoDetail } from "./evento-detail";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const eventos = "eventos.json";

@Injectable()
export class EventoService {
  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL + eventos);
  }

  getEventoDetail(eventoId): Observable<EventoDetail> {
    return this.http.get<EventoDetail>(API_URL + "evento-" + eventoId + ".json"
    );
  }
}