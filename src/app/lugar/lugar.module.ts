import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarService } from './lugar.service';
import { LugarCreateComponent } from './lugar-create/lugar-create.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LugarListComponent, LugarCreateComponent],
  exports: [LugarListComponent],
  providers: [LugarService]
})
export class LugarModule { }