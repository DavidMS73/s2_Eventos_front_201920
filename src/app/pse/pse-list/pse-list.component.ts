import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Pse } from '../pse';
import {PseService} from '../pse.service';
@Component({
  selector: 'list-pse',
  templateUrl: './pse-list.component.html'
})
export class PseListComponent implements OnInit {
 
 constructor(private psesService: PseService) {
    this.pses = [];
  }
  pses: Pse[];
  
  getPses(): void {
    this.psesService
      .getPses()
      .subscribe(pses => (this.pses = pses));
  }
  ngOnInit() {
    this.getPses();
  }

}