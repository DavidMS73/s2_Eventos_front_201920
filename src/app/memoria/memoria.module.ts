import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriaListComponent } from './memoria-list/memoria-list.component';
import { MemoriaService } from './memoria.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MemoriaListComponent],
  exports: [MemoriaListComponent],
  providers: [MemoriaService]
})
export class MemoriaModule { }