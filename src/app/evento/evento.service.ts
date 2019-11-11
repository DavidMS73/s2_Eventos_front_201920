import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Evento } from "./evento";
import { EventoDetail } from "./evento-detail";

import { environment } from "../../environments/environment";
//const API_URL ="../../assets";
//const eventos = "/eventos.json";
const API_URL = environment.apiURL;
const eventos = "/eventos";

/**
 * El proveedor de servicios para todo lo relacionado a eventos
 */
@Injectable()
export class EventoService {

  /**
   * Constructor del servicio
   * @param http HttpClient - Necesario para las solicitudes
   */
  constructor(private http: HttpClient) { }

  /**
   * Returns el objeto Observable que contiene la lista de eventos recuperada del API
   * @returns lista de eventos in tiempo real
   */
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL + eventos);
  }

  /**
   * Crea un nuevo evento
   * @param evento Nuevo evento
   * @returns Evento con su nuevo id si fue creado, falso si no
   */
  createEvento(evento): Observable<EventoDetail> {
    return this.http.post<EventoDetail>(API_URL + eventos, evento);
  }

  /**
   * Returna el objeto Observable con los detalles de un evento recuperado del API
   * @returns detalle del evento
   */
  getEventoDetail(eventoId): Observable<EventoDetail> {
    return this.http.get<EventoDetail>(API_URL + eventos + '/' + eventoId);
  }

  /**
   * Actualiza un nuevo evento
   * @param evento El evento actualizado
   * @returns El evento actualizado
   */
  updateEvento(evento): Observable<EventoDetail> {
    return this.http.put<EventoDetail>(
      API_URL + eventos + "/" + evento.id,
      evento
    );
  }

  /**
   * Elimina un evento
   * @param eventoId Id del evento
   * @returns True if el evento fue eliminado, false en otro caso
   */
  deleteEvento(eventoId): Observable<EventoDetail> {
    return this.http.delete<EventoDetail>(API_URL + eventos + "/" + eventoId);
  }
}