import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PseListComponent } from './pse-list/pse-list.component';
import { PseService } from './pse.service';;
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [CommonModule, AppRoutingModule, FormsModule],
  declarations: [PseListComponent],
  exports: [PseListComponent],
  providers: [PseService]
})
export class UsuarioModule { }