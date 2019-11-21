import { Component, OnInit, Input, } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
    selector: 'app-usuario-tarjetas',
    templateUrl: './usuario-list-tarjet.component.html',
})
export class UsuarioTarjetasComponent implements OnInit{
    
    @Input() tarjetasUsuario: Tarjeta[];

    public isCollapsed = false;

    updateTarjetas(tarjetas: Tarjeta[]): void{
        this.tarjetasUsuario = tarjetas;
    }

    ngOnInit(){
        
    }
}