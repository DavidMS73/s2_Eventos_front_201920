import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { MedioDePagoService } from '../../medioDePago.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, Location } from "@angular/common";
import { Router } from '@angular/router';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-tarjeta-list',
    templateUrl: './tarjeta-list.component.html',
})
export class TarjetaListComponent implements OnInit {
    tarjetas: Tarjeta[];

    constructor(private mediopagoService: MedioDePagoService,
              private location: Location){ }

    getTarjetas(){
        this.mediopagoService.getTarjetas()
        .subscribe(tarjetas => {
            this.tarjetas = tarjetas;
        });
    }          

    ngOnInit(){
        this.tarjetas = [];
        this.getTarjetas();
    }
}