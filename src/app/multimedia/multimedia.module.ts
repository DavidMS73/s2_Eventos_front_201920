import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListComponent } from './multimedia-list/multimedia-list.component';
import { MultimediaService } from './multimedia.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultimediaListComponent],
  exports: [MultimediaListComponent],
  providers: [MultimediaService]
})
export class MultimediaModule { }