import { Component, OnInit } from '@angular/core';
import { Patrocinio } from "../patrocinio";
import { PatrocinioService } from "../patrocinio.service"; 
@Component({
  selector: 'app-patrocinio-list',
  templateUrl: './patrocinio-list.component.html',
  styleUrls: ['./patrocinio-list.component.css']
})
export class PatrocinioListComponent implements OnInit {
 constructor(private patrociniosService: PatrocinioService) {
    this.patrocinios = [];
  }
  patrocinios: Patrocinio[];
  getPatrocinios(): void {
    this.patrociniosService
      .getPatrocinios()
      .subscribe(patrocinios => (this.patrocinios = patrocinios));
  }
  ngOnInit() {
    this.getPatrocinios();
  }

}