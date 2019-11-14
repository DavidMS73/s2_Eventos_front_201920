import { Component, OnInit } from '@angular/core';
import { Pse } from '../pse';
import {PseService} from '../pse.service';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
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