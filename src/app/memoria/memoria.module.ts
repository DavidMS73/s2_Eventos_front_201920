import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriaListComponent } from './memoria-list/memoria-list.component';
import { MemoriaService } from './memoria.service';
import { MemoriaCreateComponent} from './memoria-create/memoria-create.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MemoriaListComponent, MemoriaCreateComponent],
  exports: [MemoriaListComponent],
  providers: [MemoriaService]
})
export class MemoriaModule { }