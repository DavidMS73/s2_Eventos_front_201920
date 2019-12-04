
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";

import { MemoriaService } from '../memoria.service';
import { Memoria } from '../memoria';
import { Evento } from "../../evento/evento";
import { EventoService } from "../../evento/evento.service";

@Component({
    selector: "app-memoria-create",
    templateUrl: "./memoria-create.component.html",
    styleUrls: ["./memoria-create.component.css"],
    providers: [DatePipe]
})
export class MemoriaCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private memoriaService: MemoriaService,
        private eventoService: EventoService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    eventos: Evento[];

    memoria: Memoria;

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
    createMemoria(): Memoria {
        let fechaMemoria: Date = new Date(this.memoria.fecha.year, this.memoria.fecha.month - 1, this.memoria.fecha.day);

        this.memoria.fecha = fechaMemoria;

        console.log(this.memoria);

        this.memoriaService.createMemoria(this.memoria)
            .subscribe(memoria => {
                this.memoria.id = memoria.id;
                this.create.emit();
                this.toastrService.success("La memoria fue creada", "Creación memoria");
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.memoria;
    }

    ngOnInit() {
        this.memoria = new Memoria();
        this.memoria.evento = new Evento();
        this.getEventos();
    }
}