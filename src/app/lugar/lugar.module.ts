import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarService } from './lugar.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [LugarListComponent],
    exports: [LugarListComponent],
    providers: [LugarService]
  })
  export class LugarModule { }