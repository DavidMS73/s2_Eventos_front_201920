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
  constructor(
    private eventoService: EventoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {
    this.eventos = [];
  }

  /**
    * Lista de eventos a mostrar
    */
  eventos: Evento[];

  /**
    * Muestra u oculta el componente de crear
    */
  showCreate: boolean;

  /**
   * Muestra u oculta el componente de editar
   */
  showEdit: boolean;

  /**
   * Id del evento a ser editado
   */
  evento_edit_id: number;

  /**
    * El método retorna todos los eventos en LesIndestructibles para mostrarlos en la lista
    */
  getEventos(): void {
    this.eventoService.getEventos().subscribe(eventos => (this.eventos = eventos));
  }

  getNumEven(): void {
    for (let i = 0; i < this.eventos.length; i++) {
      var fechaInicio2: string;
      fechaInicio2 = this.eventos[i].fechaInicio + "";
      var splitted = fechaInicio2.split("T");
      this.eventos[i].fechaInicio = splitted[0];

      var fechaFin2: string;
      fechaFin2 = this.eventos[i].fechaFin + "";
      var splitted2 = fechaFin2.split("T");
      this.eventos[i].fechaFin = splitted2[0];
    }
  }

  /**
    * Muestra u oculta el componente de crear
    */
  showHideCreate(): void {
    this.showEdit = false;
  }

  /**
    * Muestra u oculta el componente de editar
    */
  showHideEdit(evento_id: number): void {
    if (!this.showEdit || (this.showEdit && evento_id != this.evento_edit_id)) {
      this.showEdit = true;
      this.evento_edit_id = evento_id;
    }
    else {
      this.showEdit = false;
    }
  }

  /**
   * Actualizar el evento
   */
  updateEvento(): void {
    this.showEdit = false;
  }

  /**
    * Borra un evento
    */
  deleteEvento(eventoId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar un evento',
      childComponent: SimpleModalComponent,
      data: { text: '¿Seguro que desea eliminar el evento?' },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.eventoService.deleteEvento(eventoId).subscribe(() => {
              this.toastrService.success("El evento fue eliminado satisfactoriamente", "Evento eliminado");
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, "Error");
            });
            return true;
          }
        },
        { text: 'No', onAction: () => true }
      ]
    });
  }


  /**
    * El método que inicializa el componente
    */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getEventos();
  }
}
