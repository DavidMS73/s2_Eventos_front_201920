import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EventoService } from './evento.service';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [EventoListComponent, EventoDetailComponent],
  exports: [EventoListComponent],
  providers: [EventoService]
})
export class EventoModule { }