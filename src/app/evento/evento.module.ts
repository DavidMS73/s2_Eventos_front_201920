import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoService } from './evento.service';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import {EventoEditComponent} from './evento-edit/evento-edit.component';


@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule],
  declarations: [EventoListComponent, EventoDetailComponent, EventoCreateComponent, EventoEditComponent],
  exports: [EventoListComponent],
  providers: [EventoService]
})
export class EventoModule { }