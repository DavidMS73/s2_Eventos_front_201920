import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { ActividadEvento } from "../actividadevento";
import { ActividadEventoService } from "../actividadevento.service";

/**
* Component para la lista de eventos en LesIndestructibles
*/
@Component({
    selector: "list-actividadevento",
    templateUrl: "./actividadevento-list.component.html"
  })
  export class ActividadEventoListComponent implements OnInit {

    /**
   * Constructor para el componente
   * @param actividadeventoService Proveedor de servicios de eventos
   */
  constructor(
    private actividadeventoService: ActividadEventoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {
    this.actividadesevento = [];
  }

  /**
    * Lista de actividades de evento a mostrar
    */
   actividadesevento: ActividadEvento[];

   /**
    * El método retorna todos las actividades de evento en LesIndestructibles para mostrarlos en la lista
    */
  getActividadesEvento(): void {
    this.actividadeventoService.getActividadesEvento().subscribe(actividadesevento => (this.actividadesevento = actividadesevento));
  }


  /**
    * Borra un evento
    */
   deleteEvento(actividadeventoId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar una actividad de evento',
      childComponent: SimpleModalComponent,
      data: { text: '¿Seguro que desea eliminar la actividad?' },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.actividadeventoService.deleteActividadEvento(actividadeventoId).subscribe(() => {
              this.toastrService.success("La actividad fue eliminada satisfactoriamente", "Actividad eliminada");
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

  ngOnInit() {
    this.getActividadesEvento();
  }


  }
