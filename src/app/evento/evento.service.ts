import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Evento } from "./evento";
import { EventoDetail } from "./evento-detail";

import { environment } from "../../environments/environment";
const API_URL = environment.apiURL;
const eventos = "/eventos";

/**
 * The service provider for everything related to eventos
 */
@Injectable()
export class EventoService {
  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns the Observable object containing the list of eventos retrieved from the API
   * @returns The list of eventos in real time
   */
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL + eventos);
  }

  /**
   * Creates a new evento
   * @param evento The new evento
   * @returns The book with its new id if it was created, false if it wasn't
   */
  createBook(evento): Observable<EventoDetail> {
    return this.http.post<EventoDetail>(API_URL + eventos, evento);
  }

  /**
   * Returns the Observable object with the details of an evento retrieved from the API
   * @returns El detalle del evento
   */
  getEventoDetail(eventoId): Observable<EventoDetail> {
    return this.http.get<EventoDetail>(API_URL + eventos + "/" + eventoId);
  }

  /**
   * Updates a new evento
   * @param evento The updated evento
   * @returns The updated evento
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
   * @returns True if the book was deleted, false otherwise
   */
  deleteEvento(eventoId): Observable<EventoDetail> {
    return this.http.delete<EventoDetail>(API_URL + eventos + "/" + eventoId);
  }
}