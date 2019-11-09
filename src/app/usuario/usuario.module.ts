import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [UsuarioListComponent],
  exports: [UsuarioListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }