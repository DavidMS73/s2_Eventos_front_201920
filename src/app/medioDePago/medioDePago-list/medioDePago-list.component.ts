import { Component, OnInit } from "@angular/core";
import { MedioDePago } from "../medioDePago";
import { MedioDePagoService } from "../medioDePago.service";

@Component({
  selector: "list-medioDePago",
  templateUrl: "./medioDePago-list.component.html"
})
export class MedioDePagoListComponent implements OnInit {
  constructor(private medioDePagoService: MedioDePagoService) {}

  medios: MedioDePago[];

  getMediosDePago(): void {
    this.medioDePagoService.getMediosDePago().subscribe(medios => (this.medios = medios));
  }

  ngOnInit() {
    this.getMediosDePago();
  }
}