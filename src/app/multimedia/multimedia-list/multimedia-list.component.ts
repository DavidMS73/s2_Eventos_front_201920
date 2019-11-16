import { Component, OnInit } from '@angular/core';

import { MultimediaService } from '../multimedia.service'
import { Multimedia } from "../multimedia";

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {

  /**
  * The list of lugares which belong to the app
  */
  multimedias: Multimedia[];

  /**
  * Asks the service to update the list of lugares
  */
  getMultimedias(): void {
    this.multimediaService.getMultimedias().subscribe(multimedias=>(this.multimedias=multimedias));

  }

  createLugar(): void {
    this.multimediaService.createMultimedia();
    this.getMultimedias();
  }

  /**
  * Constructor for the component
  * @param multimediaService The author's services provider
  */
  constructor(private multimediaService: MultimediaService) { }

  /**
  * This will initialize the component by retrieving the list of editorials from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
    this.getMultimedias();
  }
}