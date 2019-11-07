import { Component, OnInit } from '@angular/core';

import { MemoriaService } from '../memoria.service'
import { Memoria } from '../memoria'

@Component({
  selector: 'app-memoria-list',
  templateUrl: './memoria-list.component.html',
  styleUrls: ['./memoria-list.component.css']
})
export class MemoriaListComponent implements OnInit {

  /**
  * The list of memorias which belong to the app
  */ 
  memorias: Memoria[] ;

  /**
  * Asks the service to update the list of memorias
  */
  getMemorias(): void {
    this.memoriaService.getMemorias().subscribe(memorias => this.memorias = memorias);
    }

  createMemoria(): void{
    this.memoriaService.createMemoria().subscribe(
      (val) => { alert("POST call successful value returned in body" + val); },
      response => {alert("POST call in error" + response);},
      () => {alert("The POST observable is now completed.");}
      );
    this.getMemorias(); 
  }

  /**
  * Constructor for the component
  * @param memoriaService The author's services provider
  */
  constructor(private memoriaService: MemoriaService) { }

  /**
  * This will initialize the component by retrieving the list of editorials from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
    this.getMemorias();
  }
}