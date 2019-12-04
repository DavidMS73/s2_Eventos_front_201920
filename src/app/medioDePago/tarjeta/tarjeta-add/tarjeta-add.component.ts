import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { MedioDePagoService } from '../../medioDePago.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
import { Router } from '@angular/router';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-tarjeta-add',
    templateUrl: './tarjeta-add.component.html',
    providers: [DatePipe]

})
export class TarjetaAddComponent implements OnInit {

    tarjeta: Tarjeta; 

    @Output() create = new EventEmitter();

    constructor( private medioPagoService: MedioDePagoService,
        private toastrService: ToastrService,
        private dp: DatePipe,
        private router: Router
        ){ }

    createTarjeta(): Tarjeta{
        let fechaexp: Date = new Date(
            this.tarjeta.expiracion.year,
            this.tarjeta.expiracion.month-1,
            this.tarjeta.expiracion.day
        );

        this.tarjeta.expiracion  = this.dp.transform(fechaexp,"yyyy-MM-ddT00:00:00-05:00");
        
        this.medioPagoService.createTarjeta(this.tarjeta)
        .subscribe(x => {
            this.tarjeta = x;
            this.create.emit();
            this.toastrService.success("Se creo una tarjeta", "Crear tarjeta");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        this.router.navigateByUrl('/');
        return this.tarjeta;
    }

    ngOnInit(){
        this.tarjeta = new Tarjeta();
    }
}