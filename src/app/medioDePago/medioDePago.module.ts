import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MedioDePagoService } from './medioDePago.service';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MedioDePagoListComponent],
  providers: [MedioDePagoService],
  exports: [MedioDePagoListComponent]
})
export class MedioDePagoModule { }