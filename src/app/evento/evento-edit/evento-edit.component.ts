import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { DatePipe } from '@angular/common';
import { EventoService } from '../evento.service';
import { EventoDetail } from '../evento-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-evento-edit',
    templateUrl: './evento-edit.component.html',
    providers: [DatePipe]
})
export class EventoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor del componente
    * @param dp DatePipe to format the date.
    * @param eventoService The evento's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private eventoService: EventoService,
        private toastrService: ToastrService,
    ) { }

    /**
    * The id of the evento that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() evento_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an evento
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new evento
    */
    @Output() update = new EventEmitter();

    /**
    * The evento id as received from the parent component
    */
    evento: EventoDetail;

    /**
    * Lista de categorías en LesIndestructibles
    */
    categorias: string[] = ["Académico", "Cultural"];

    /**
    * Retrieves the information of the evento
    */
    getEvento(): void {
        this.eventoService.getEventoDetail(this.evento_id)
            .subscribe(evento => {
                this.evento = evento;
            });
    }

    /**
    * Updates the information of the evento
    */
    editEvento(): void {
        let dateInicio: Date = new Date(this.evento.fechaInicio.year, this.evento.fechaInicio.month - 1, this.evento.fechaInicio.day);
        let dateFin: Date = new Date(this.evento.fechaFin.year, this.evento.fechaFin.month - 1, this.evento.fechaFin.day);
        this.evento.fechaInicio = dateInicio;
        this.evento.fechaFin = dateFin;
        this.eventoService.updateEvento(this.evento)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del evento fue actualizada", "Edición del evento");
            });
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.evento && this.evento.fechaInicio && this.evento.fechaFin) {
            this.evento.fechaInicio = this.evento.fechaInicio.substring(0, 10);
            this.evento.fechaFin = this.evento.fechaFin.substring(0, 10);
            var date1 = {
                day: + this.evento.fechaInicio.split('-')[2],
                month: + this.evento.fechaInicio.split('-')[1],
                year: + this.evento.fechaInicio.split('-')[0]
            };
            var date2 = {
                day: + this.evento.fechaFin.split('-')[2],
                month: + this.evento.fechaFin.split('-')[1],
                year: + this.evento.fechaFin.split('-')[0]
            };
            this.evento.fechaInicio = date1;
            this.evento.fechaFin = date2;
        }
        this.evento = new EventoDetail();
        this.getEvento();
    }

    /**
    * This function will be called when the user chooses another evento to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}