import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MedioDePagoService } from '../medioDePago.service';
import { TarjetaAddComponent } from './tarjeta-add/tarjeta-add.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [TarjetaAddComponent],
    providers: [MedioDePagoService],
    exports: [TarjetaAddComponent]
})
export class TarjetaModule { }