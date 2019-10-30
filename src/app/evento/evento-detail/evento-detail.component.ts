import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { EventoService } from "../evento.service";
import { Evento } from "../evento";
import { EventoDetail } from "../evento-detail";

@Component({
  selector: "app-evento-detail",
  templateUrl: "./evento-detail.component.html",
  styleUrls: ["./evento-detail.component.css"]
})
export class EventoDetailComponent implements OnInit {
  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute
  )
  {}

  eventoDetail: EventoDetail;

  @Input() evento_id: number;

  loader: any;

  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_id).subscribe(o => {this.eventoDetail = o;});
  }

  onLoad(params) {
    this.evento_id = parseInt(params['id']);
    console.log(" en detail " + this.evento_id);
    this.eventoDetail = new EventoDetail();
    this.getEventoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
