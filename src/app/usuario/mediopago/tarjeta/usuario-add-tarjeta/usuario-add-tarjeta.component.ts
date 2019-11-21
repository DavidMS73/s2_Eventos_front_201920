import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Tarjeta } from '../tarjeta';
import { Usuario } from '../../../usuario';
import { UsuarioService } from '../../../usuario.service';

@Component({
    selector: 'app-usuario-add-tarjeta',
    templateUrl: './usuario-add-tarjeta.component.html',
    styleUrls: ['./usuario-add-tarjeta.component.css']
})
export class UsuarioAddTarjetaComponent implements OnInit, OnChanges{

    constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
        ){}

    @Input() usuario: Usuario;

    tarjeta: Tarjeta;

    public isCollapsed = true;

    postTarjeta(tarjetaForm: NgForm): Tarjeta{
        this.tarjeta.usuario = this.usuario;
        this.usuarioService.createTarjeta(this.usuario.id, this.tarjeta)
        .subscribe(() => {
            tarjetaForm.resetForm();
            this.updateTarjetas.emit();
            this.toastrService.success("La tarjeta fue creada", "Tarjeta añadida");
        }, err => {
            this.toastrService.error(err, 'Error');
        });
        return this.tarjeta;
    }

    @Output() updateTarjetas = new EventEmitter();

     /**
    * The function which initializes the component.
    */
   ngOnInit() {
        this.tarjeta = new Tarjeta();
    }

    ngOnChanges() {
        this.ngOnInit();
    }
} 