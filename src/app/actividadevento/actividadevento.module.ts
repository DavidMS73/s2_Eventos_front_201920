import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ActividadEventoListComponent } from './actividadevento-list/actividadevento-list.component';
import {ActividadEventoService } from './actividadevento.service';
import { ActividadEventoCreateComponent} from './actividadevento-create/actividadevento-create.component';
@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule, 
    NgxPermissionsModule],
  declarations: [ActividadEventoListComponent, ActividadEventoCreateComponent],
  exports: [ActividadEventoListComponent],
  providers: [ActividadEventoService]
})  
export class ActividadEventoModule { }