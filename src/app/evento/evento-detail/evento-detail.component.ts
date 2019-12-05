import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params } from '@angular/router';
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
    * Constructor del componente
    * @param eventoService Servicio de evento que se comunica con el API
    * @param route La ruta que ayuda a recuperar el id del evento para ser mostrado
    * @param router El enrutador que se necesario para saber cuando el componente necesita recargarse
    * @param toastrService Toastr para mostrar mensajes al usuario
    */
  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {

    // Es añadido, luego podemos refrescar la vista cuando uno de los eventos en la lista 
    // "Otros eventos" es oprimido
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  loader: any;
  /**
    * Id del evento recuperado del path
    */
  evento_id: number;

  public isCollapsed = true;

  /**
    * El evento cuyos detalles son mostraddos
    */
  @Input() eventoDetail: EventoDetail;

  /**
    * Los otros eventos mostrados en la barra lateral
    */
  otros_eventos: Evento[];

  /**
    * La suscripción que ayuda a saber cuándo un nuevo evento
    * necesita ser cargado
    */
  navigationSubscription;

  /**
    * El método retorna los detalles del evento que se quiere mostrar
    */
  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_id).subscribe(eventoDetail => { this.eventoDetail = eventoDetail; });
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
  deleteEvento(): void {
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
  onLoad(params) {
    this.evento_id = parseInt(params['id']);
    console.log(" en detail " + this.evento_id);
    this.eventoDetail = new EventoDetail();
    this.getEventoDetail();
  }
  /**
    * Método que inicializa el componente
    * Inicializamos el evento para nunca ser considerados indefinidos
    */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.evento_id = +this.route.snapshot.paramMap.get('id');
    this.eventoDetail = new EventoDetail();
    this.getEventoDetail();
    this.getOtrosEventos();
  }

  /**
    * Este método ayuda a refrescar la vista cuando se necesita cargar otro evento en esta
    * cuando uno de los otros eventos de la lista es seleccionado
    */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
