import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TarjetaListComponent } from './tarjeta-list/tarjeta-list.component';
import { TarjetaService } from './tarjeta.service';

@NgModule({
    imports: [CommonModule, AppRoutingModule],
    declarations: [TarjetaListComponent],
    exports:[TarjetaListComponent],
    providers:[TarjetaService]
})
export class TarjetaModule{ }