import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Pse} from '../pse';
import { MedioDePagoService } from '../../medioDePago.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
import { Router } from '@angular/router';

@Component({
    selector: 'app-pse-add',
    templateUrl: './pse-add.component.html'
})
export class PseAddComponent implements OnInit{

    pse: Pse;

    @Output() create = new EventEmitter();

    constructor(private medioPagoService: MedioDePagoService,
        private toastrService: ToastrService,
        private router: Router){ }
    
    createPse(): Pse{
        this.medioPagoService.createPse(this.pse)
        .subscribe(y => {
            this.pse = y;
            this.create.emit();
            this.toastrService.success("Se creo un pse exitosamente", "Crear pse");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        return this.pse;
    }
    ngOnInit(){
        this.pse = new Pse();
    }
}