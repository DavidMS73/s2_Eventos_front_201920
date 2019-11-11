import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";

import { EventoService } from "../evento.service";
import { Evento } from "../evento";

@Component({
  selector: "app-evento-create",
  templateUrl: "./evento-create.component.html",
  styleUrls: ["./evento-create.component.css"],
  providers: [DatePipe]
})
export class EventoCreateComponent implements OnInit {
  
  /**
   * Constructor del componente
   * @param dp DatePipe para seleccionar la fecha
   * @param eventoService Proveedor de servicio de evento
   * @param toastrService Toasttr para mostrar mensajes al usuario
   * @param router 
   */
  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  /**
   * El nuevo evento
   */
  evento: Evento;

  /**
    * El output el cual indica al componente padre que el
    * usuario no quiere crear el evento definitivamente
    */
  @Output() cancel = new EventEmitter();

  /**
    * El output el cual le avisa al componente padre
    * que el usuario creó un nuevo evento
    */
  @Output() create = new EventEmitter();

  /**
    * Esta función inilizará el componente
    */
  ngOnInit() {
    this.evento = new Evento();
  }

  /**
    * Informa al componente padre que el usuario no quiere crear un evento
    */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
    * Crea un nuevo evento
    */
  createEvento(): Evento {
    // let fechaInicio: Date = new Date(
    //   this.evento.fechaInicio.year,
    //   this.evento.fechaInicio.getMonth - 1,
    //   this.evento.fechaInicio.getDay
    // );
    // let fechaFin: Date = new Date(
    //   this.evento.fechaFin.year,
    //   this.evento.fechaFin.month - 1,
    //   this.evento.fechaFin.day
    // );

    // this.evento.fechaInicio = this.dp.transform(fechaInicio, "yyyy-MM-dd");
    // this.evento.fechaFin = this.dp.transform(fechaFin, "yyyy-MM-dd");

    this.evento.fechaFin = "2020-09-10T05:00:00Z[UTC]";
    this.evento.fechaInicio = "2020-09-06T05:00:00Z[UTC]";
    console.log(this.evento.categoria);
    console.log(this.evento.descripcion );

    this.eventoService.createEvento(this.evento).subscribe(
      (evento) => {
        this.evento = evento;
        this.create.emit();
        this.toastrService.success("El evento fue created", "Evento creation");
      },
      err => {
        this.toastrService.error(err, "Error");
      }
    );
    return this.evento;
  }
}
