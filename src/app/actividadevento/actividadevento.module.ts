import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

//import { MemoriaListComponent } from './memoria-list/memoria-list.component';
import {ActividadEventoService } from './actividadevento.service';
//import { MemoriaCreateComponent} from './memoria-create/memoria-create.component';
@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule, 
    NgxPermissionsModule],
 // declarations: [MemoriaListComponent, MemoriaCreateComponent],
  //exports: [MemoriaListComponent],
  providers: [ActividadEventoService]
})
export class ActividadEventoModule { }