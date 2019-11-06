import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDePagoService } from './medioDePago.service';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedioDePagoListComponent],
  providers: [MedioDePagoService],
  export: [MedioDePagoListComponent]
})
export class MedioDePagoModule { }