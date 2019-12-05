import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Memoria } from '../../memoria/memoria';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';

@Component({
    selector: 'app-evento-create-memoria',
    templateUrl: './evento-create-memoria.component.html',
    styleUrls: ['./evento-create-memoria.component.css']
})
export class EventoCreateMemoriaComponent implements OnInit, OnChanges {

    constructor(
        private eventoService: EventoService,
        private toastrService: ToastrService
    ) { }

    @Input() evento: Evento;

    memoria: Memoria;

    public isCollapsed = true;

    /**
    * El Event Emitter que envía la señal  cuando se publica una memoria
    * para que se refresque la lista de memorias
    */
    @Output() updateMemorias = new EventEmitter();

    ngOnInit() {
        this.memoria = new Memoria();
    }

    postMemoria(reviewForm: NgForm): Memoria {
        this.memoria.evento = this.evento;
        this.eventoService.createEventoMemoria(this.evento.id, this.memoria)
            .subscribe(() => {
                reviewForm.resetForm();
                this.updateMemorias.emit();
                this.toastrService.success("Se agrego la memoria de manera exitosa", 'Memoria agregada');
            }, err => {
                this.toastrService.error(err, 'Error');
            }); 
        return this.memoria;
    } 
    /**
    * The function which notices that the input which defines the bicicleta_id has changed.
    * If the bike has changed, we update the reviews to show
    */
    ngOnChanges() {
        console.log("Se va a crear una memoria ");
        this.ngOnInit();
    }

}