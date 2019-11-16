import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";

import { LugarService } from "../lugar.service";
import { Lugar } from "../lugar";

@Component({
  selector: "app-lugar-create",
  templateUrl: "./lugar-create.component.html",
  styleUrls: ["./lugar-create.component.css"],
  providers: [DatePipe]
})
export class LugarCreateComponent implements OnInit {
  constructor(
    private dp: DatePipe,
    private lugarService: LugarService,
    private toastrService: ToastrService,
    private router: Router
  ) { }


  lugar:Lugar;

  /**
    * El output el cual indica al componente padre que el
    * usuario no quiere crear el evento definitivamente
    */
   @Output() cancel = new EventEmitter();

   /**
     * El output el cual le avisa al componente padre
     * que el usuario creó un nuevo evento
     */
   @Output() create = new EventEmitter();
  cancelCreation(): void {
    this.cancel.emit();
  }
    ngOnInit() {
      this.lugar= new Lugar();
    }
}