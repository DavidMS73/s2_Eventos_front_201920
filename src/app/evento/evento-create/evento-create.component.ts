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
  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  evento: Evento;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  ngOnInit() {
    this.evento = new Evento();
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  createEvento(): Evento {
    let fechaInicio: Date = new Date(
      this.evento.fechaInicio.year,
      this.evento.fechaInicio.getMonth - 1,
      this.evento.fechaInicio.getDay
    );
    let fechaFin: Date = new Date(
      this.evento.fechaFin.year,
      this.evento.fechaFin.month - 1,
      this.evento.fechaFin.day
    );

    this.evento.fechaInicio = this.dp.transform(fechaInicio, "yyyy-MM-dd");
    this.evento.fechaFin = this.dp.transform(fechaFin, "yyyy-MM-dd");
    this.eventoService.createEvento(this.evento).subscribe(
      (evento) => {
        this.evento = evento;
        this.create.emit();
        this.toastrService.success("The evento was created", "Evento creation");
      },
      err => {
        this.toastrService.error(err, "Error");
      }
    );
    return this.evento;
  }
}
