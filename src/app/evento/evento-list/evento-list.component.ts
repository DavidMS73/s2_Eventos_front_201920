import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { Evento } from "../evento";
import { EventoService } from "../evento.service";
import { EventoDetail } from '../evento-detail';
import { Observable } from 'rxjs';

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
  eventoDetail: EventoDetail;
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


  eventoscard: HTMLElement;

  borrarEventosLista() {
    this.eventoscard = document.getElementById("eventos");
    while (this.eventoscard.hasChildNodes()) {
      this.eventoscard.removeChild(this.eventoscard.lastChild);
    }
  }

  /**
    * El método retorna todos los eventos en LesIndestructibles para mostrarlos en la lista
    */
  getEventos(): void {
    this.eventoService.getEventos().subscribe(eventos => (this.eventos = eventos));
  }

  filtrarCultural(): void {
    this.borrarEventosLista();
    let eventosFiltrados: Evento[] = this.filtrarPorCultural(this.eventos);
    console.log(eventosFiltrados.length);
    this.actualizarEventos(eventosFiltrados);
  }
  filtrarPorCultural(evs: Evento[]): Evento[] {
    return evs.filter(e => e.categoria === "Cultural");

  }

  filtrarAcademico(): void {
    this.borrarEventosLista();
    let eventosFiltrados: Evento[] = this.filtrarPorAcademico(this.eventos);
    console.log(eventosFiltrados.length);
    this.actualizarEventos(eventosFiltrados);
  }

  filtrarPorAcademico(evs: Evento[]): Evento[] {
    return evs.filter(e => e.categoria === "Académico");

  }

  filtrarLugar(): void {
    const inputFecha: HTMLElement = document.getElementById("lugarFiltro");
    this.borrarEventosLista();
    //this.eventoDetail= this.eventoService.getEventoDetail(this.evento_edit_id);
    let eventosFiltrados: Evento[] = this.filtrarPorFecha(inputFecha, this.eventos);
    console.log(eventosFiltrados.length);
    this.actualizarEventos(eventosFiltrados);
  }

  filtrarPorLugar(fechaParametro, evs: Evento[]): Evento[] {
    return fechaParametro === "" ? this.eventos : evs.filter(e => e.fechaInicio === fechaParametro.value);

  }
  filtrarFecha(): void {
    const inputDate: HTMLElement = document.getElementById("eventoFecha");
    this.borrarEventosLista();
    let eventosFiltrados: Evento[] = this.filtrarPorFecha(inputDate, this.eventos);
    console.log(eventosFiltrados.length);
    this.actualizarEventos(eventosFiltrados);
  }

  filtrarPorFecha(fechaParametro, evs: Evento[]): Evento[] {
    return fechaParametro === "" ? this.eventos : evs.filter(e => e.fechaInicio === fechaParametro.value);

  }
  actualizarEventos(even: Evento[]): void {
    even.forEach(e => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td  > <b style="color:#6FFFE9;">Nombre del evento:</b><p style="color:#FFFF;">  ${e.nombre}</p></td>&nbsp;&nbsp;&nbsp
                           <td  > <b style="color:#6FFFE9;">Valor del evento:</b><p style="color:#FFFF;;"> ${e.valor}</p></td>&nbsp;&nbsp;&nbsp
                           <td  ><b style="color:#6FFFE9;"> Cantidad de entradas restantes:</b><p style="color:#FFFF;"> ${e.entradasRestantes}</p></td>`;
      this.eventoscard.appendChild(trElement);
    });

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
    this.ngOnInit();
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
