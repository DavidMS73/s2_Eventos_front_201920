import { Component, OnInit, Input, } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
    selector: 'app-usuario-tarjeta',
    templateUrl: './usuario-trajeta.component.html',
})
export class UsuarioTajetasComponent implements OnInit {
    @Input() usuarioTarjetas: Tarjeta[];

    public isCollapsed = false;

    updateTarjetas(tarjetas: Tarjeta[]): void{
        this.usuarioTarjetas = tarjetas;
    }

    ngOnInit(){
    }
}
