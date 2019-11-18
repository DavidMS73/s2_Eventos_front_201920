import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import {Pago} from '../pago';
import {PagoService} from '../pago.service';

@Component({
    selector: "list-pago",
    templateUrl: "./pago-list.component.html"
  })
  export class PagoListComponent implements OnInit {

    constructor(
        private pagoService: PagoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {
          this.pagos=[];
      }

      /**
    * Lista de eventos a mostrar
    */
  pagos: Pago[];

  /**
    * Muestra u oculta el componente de crear
    */
  showCreate: boolean;

  /**
   * Muestra u oculta el componente de editar
   */
  showEdit: boolean;

  getPagos(): void {
    this.pagoService.getPagos().subscribe(pagos => (this.pagos = pagos));
  }
  
    ngOnInit() {
        this.showCreate = false; 
        this.showEdit = false;
        this.getPagos(); 
    }
}