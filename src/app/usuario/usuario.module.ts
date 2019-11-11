import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { UsuariosCreateComponent } from "./usuario-create/usuario-create.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [CommonModule, AppRoutingModule, FormsModule],
  declarations: [UsuarioListComponent, UsuariosCreateComponent],
  exports: [UsuarioListComponent, UsuariosCreateComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }