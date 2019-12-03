import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { MedioDePagoService } from '../../medioDePago.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-tarjeta-add',
    templateUrl: './tarjeta-add.component.html',

})
export class TarjetaAddComponent implements OnInit {

    tarjeta: Tarjeta; 

    @Output() create = new EventEmitter();

    constructor( private medioPago: MedioDePagoService,
        private toastrService: ToastrService ){ }

    createTarjeta(){

    }

    ngOnInit(){
        this.tarjeta = new Tarjeta();
    }
}