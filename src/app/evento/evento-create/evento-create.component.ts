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
  ) { }

  /**
   * El nuevo evento
   */
  evento: Evento;

  /**
    * Lista de categorías en LesIndestructibles
    */
  categorias: String[] = ["Académico", "Cultural"];

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
    let fechaInicio: Date = new Date(
      this.evento.fechaInicio.year,
      this.evento.fechaInicio.month - 1,
      this.evento.fechaInicio.day
    );
    let fechaFin: Date = new Date(
      this.evento.fechaFin.year,
      this.evento.fechaFin.month - 1,
      this.evento.fechaFin.day
    );

    console.log(fechaInicio);
    console.log(fechaFin);
    let fInicio = this.dp.transform(fechaInicio, "yyyy-MM-ddT00:00:00");
    let fFin = this.dp.transform(fechaFin, "yyyy-MM-ddT00:00:00");

    this.evento.fechaInicio = fechaInicio;
    this.evento.fechaFin = fechaFin;
    console.log(this.evento);

    this.eventoService.createEvento(this.evento).subscribe(
      (evento) => {
        this.evento = evento;
        this.create.emit();
        this.toastrService.success("El evento fue creado", "Creación evento");
      },
      err => {
        this.toastrService.error(err, "Error");
      }
    );
    return this.evento;
  }
}
