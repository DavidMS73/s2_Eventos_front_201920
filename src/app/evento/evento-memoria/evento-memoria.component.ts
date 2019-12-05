import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from '../evento.service';
import { Memoria } from '../../memoria/memoria';

@Component({
  selector: 'evento-memoria',
  templateUrl: './evento-memoria.component.html',
  styleUrls: ['./evento-memoria.component.css']
})
export class EventoMemoriaComponent implements OnInit {
  constructor(private eventoService: EventoService) { }


  @Input() memoria: Memoria;
  isCollapsed: boolean = true;

  ngOnInit() {
    if (this.memoria == undefined)
      this.memoria = new Memoria();
  }


  getMemorias(idevento: number, idmemoria: number): void {
    console.log("getMemoria " + idevento);
    this.eventoService.getEventoMemoria(idevento, idmemoria)
      .subscribe(h => {
        this.memoria = h
      });
  }
} 