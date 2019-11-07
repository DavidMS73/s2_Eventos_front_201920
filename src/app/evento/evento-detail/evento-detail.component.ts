import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { EventoService } from "../evento.service";
import { Evento } from "../evento";
import { EventoDetail } from "../evento-detail";

@Component({
  selector: "app-evento-detail",
  templateUrl: "./evento-detail.component.html",
  styleUrls: ["./evento-detail.component.css"]
})
export class EventoDetailComponent implements OnInit {

  /**
    * The constructor of the component
    * @param eventoService The evento service which communicates with the API
    * @param route The route which helps to retrieves the id of the evento to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {
    //This is added so we can refresh the view when one of the eventos in
    //the "Otros eventos" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  /**
    * The evento's id retrieved from the path
    */
  evento_id: number;

  /**
    * The evento whose details are shown
    */
  eventoDetail: EventoDetail;

  /**
    * The other eventos shown in the sidebar
    */
  otros_eventos: Evento[];

  /**
    * The suscription which helps to know when a new evento
    * needs to be loaded
    */
  navigationSubscription;

  /**
    * El método retorna los detalles del evento que se quiere mostrar
    */
  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_id).subscribe(o => { this.eventoDetail = o; });
  }

  /**
    * El método retorna todos los eventos en LesIndestructibles para mostrarlos en la lista
    */
  getOtrosEventos(): void {
    this.eventoService.getEventos()
      .subscribe(eventos => {
        this.otros_eventos = eventos;
        this.otros_eventos = this.otros_eventos.filter(evento => evento.id !== this.evento_id);
      });
  }

  /**
  * La función elimina un evento de LesIndestructibles 
  */
  deleteBook(): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Delete a book',
      childComponent: SimpleModalComponent,
      data: { text: '¿Está seguro de eliminar el evento?' },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.eventoService.deleteEvento(this.evento_id).subscribe(evento => {
              this.toastrService.success("El evento  ", "Evento eliminado");
              this.router.navigate(['eventos/list']);
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
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
  ngOnInit() {
    this.evento_id = +this.route.snapshot.paramMap.get('id');
    this.eventoDetail = new EventoDetail();
    this.getEventoDetail();
    this.getOtrosEventos();
  }

  /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
