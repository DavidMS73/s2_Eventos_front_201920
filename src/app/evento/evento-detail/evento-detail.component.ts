import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  evento_id: number;

  eventoDetail: EventoDetail;

  otros_eventos: Evento[];

  navigationSubscription;

  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_id).subscribe(o => { this.eventoDetail = o; });
  }

  getOtrosEventos(): void {
    this.eventoService.getEventos()
      .subscribe(eventos => {
        this.otros_eventos = eventos;
        this.otros_eventos = this.otros_eventos.filter(evento => evento.id !== this.evento_id);
      });
  }

  ngOnInit() {
    this.evento_id = +this.route.snapshot.paramMap.get('id');
    this.eventoDetail = new EventoDetail();
    this.getEventoDetail();
    this.getOtrosEventos();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
