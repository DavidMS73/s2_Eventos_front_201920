import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { Evento } from "../evento";
import { EventoService } from "../evento.service";

/**
* Component para la lista de eventos en LesIndestructibles
*/
@Component({
  selector: "list-evento",
  templateUrl: "./evento-list.component.html"
})
export class EventoListComponent implements OnInit {

  /**
   * Constructor para el componente
   * @param eventoService Proveedor de servicios de eventos
   */
  constructor(private eventoService: EventoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {

  }

  /**
    * Lista de eventos a mostrar
    */
  eventos: Evento[];

  /**
    * El método retorna todos los eventos en LesIndestructibles para mostrarlos en la lista
    */
  getEventos(): void {
    this.eventoService.getEventos().subscribe(eventos => (this.eventos = eventos));
  }

  /**
    * El método que inicializa el componente
    */
  ngOnInit() {
    this.getEventos();
  }
}
