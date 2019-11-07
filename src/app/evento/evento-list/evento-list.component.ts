import { Component, OnInit } from "@angular/core";
import { Evento } from "../evento";
import { EventoService } from "../evento.service";

@Component({
  selector: "list-evento",
  templateUrl: "./evento-list.component.html"
})
export class EventoListComponent implements OnInit {
  constructor(private eventoService: EventoService) {}

  /**
    * The list of eventos to display
    */
  eventos: Evento[];

  /**
    * El método retorna todos los eventos en LesIndestructibles para mostrarlos en la lista
    */
  getEventos(): void {
    this.eventoService.getEventos().subscribe(eventos => (this.eventos = eventos));
  }

  /**
    * The method which initializes the component
    */
  ngOnInit() {
    this.getEventos();
  }
}
