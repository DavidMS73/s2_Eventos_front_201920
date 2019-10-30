import { Component, OnInit } from "@angular/core";
import { Evento } from "../evento";
import { EventoService } from "../evento.service";

@Component({
  selector: "list-evento",
  templateUrl: "./evento-list.component.html"
})
export class EventoListComponent implements OnInit {
  constructor(private eventoService: EventoService) {}

  eventos: Evento[];

  getEventos(): void {
    this.eventoService.getEventos().subscribe(eventos => (this.eventos = eventos));
  }

  ngOnInit() {
    this.getEventos();
  }
}
