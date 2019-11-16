import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { LugarService } from '../lugar.service'
import { Lugar } from '../lugar'

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent implements OnInit {

  /**
  * The list of lugares which belong to the app
  */
  lugares: Lugar[];

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
  lugar_edit_id: number;
  /**
  * Asks the service to update the list of lugares
  */
  getLugares(): void {
    this.lugarService.getLugares().subscribe(lugares => (this.lugares = lugares));
  }

  /**
  * Constructor for the component
  * @param lugarService The author's services provider
  */
  constructor(private lugarService: LugarService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

    
  /**
    * Muestra u oculta el componente de crear
    */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  /**
    * Muestra u oculta el componente de editar
    */
   showHideEdit(lugar_id: number): void {
    if (!this.showEdit || (this.showEdit && lugar_id != this.lugar_edit_id)) {
      this.showCreate = false;
      this.showEdit = true;
      this.lugar_edit_id = lugar_id;
    }
    else {
      this.showEdit = false;
    }
  }

  /**
   * Actualizar el evento
   */
  updateLugar(): void {
    this.showEdit = false;
  }

    /**
    * Borra un evento
    */
   deleteLugar(lugarId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Eliminar un lugar',
        childComponent: SimpleModalComponent,
        data: {text: '¿Seguro que desea eliminar el lugar?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.lugarService.deleteLugar(lugarId).subscribe(() => {
                        this.toastrService.error("El lugar fue eliminado satisfactoriamente", "Lugar eliminado");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}
  /**
  * This will initialize the component by retrieving the list of editorials from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getLugares();
  }
}