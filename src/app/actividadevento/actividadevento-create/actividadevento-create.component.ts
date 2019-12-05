import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";

import { ActividadEventoService } from '../actividadevento.service';
import { ActividadEvento } from '../actividadevento';
import { Evento } from "../../evento/evento";
import { EventoService } from "../../evento/evento.service";

@Component({
    selector: "app-actividadevento-create",
    templateUrl: "./actividadevento-create.component.html",
    styleUrls: ["./actividadevento-create.component.css"],
    providers: [DatePipe]
})
export class ActividadEventoCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private actividadeventoService: ActividadEventoService,
        private eventoService: EventoService,
        private toastrService: ToastrService,
        private router: Router
    ) { } 

    eventos: Evento[];

    actividad: ActividadEvento;

    getEventos(): void {
        this.eventoService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

    @Output() cancel = new EventEmitter();

    /**
      * El output el cual le avisa al componente padre
      * que el usuario creó una nueva memoria
      */
    @Output() create = new EventEmitter();

    cancelCreation(): void {
        this.cancel.emit();
    }
    createActividad(): ActividadEvento {
        let fechaActividad: Date = new Date(this.actividad.fecha.year, this.actividad.fecha.month - 1, this.actividad.fecha.day);

        this.actividad.fecha = fechaActividad;
        
        console.log(this.actividad);

        this.actividadeventoService.createActividad(this.actividad)
            .subscribe(actividad => {
                this.actividad.id = actividad.id;
                this.create.emit();
                this.toastrService.success("La memoria fue creada", "Creación memoria");
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.actividad;
    }

    ngOnInit() {
        this.actividad = new ActividadEvento();
        this.actividad.evento = new Evento();
        this.getEventos();
    }
}