import { Component, OnInit } from '@angular/core';

import { LugarService } from '../lugar.service'
import { Lugar } from '../lugar'

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent implements OnInit {

  /**
  * The list of lugares which belong to the app
  */
  lugares: Lugar[];

  /**
  * Asks the service to update the list of lugares
  */
  getLugares(): void {
    this.lugarService.getLugares;
  }

  createLugar(): void {
    this.lugarService.createLugar;
    this.getLugares;
  }

  /**
  * Constructor for the component
  * @param lugarService The author's services provider
  */
  constructor(private lugarService: LugarService) { }

  /**
  * This will initialize the component by retrieving the list of editorials from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
    this.getLugares;
  }
}