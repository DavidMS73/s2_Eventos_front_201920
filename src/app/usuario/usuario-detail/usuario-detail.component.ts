import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Usuario } from "../usuario";
import { UsuarioDetail } from "../usuario-detail";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-usuario-detail",
  templateUrl: "./usuario-detail.component.html",
  styleUrls: ["./usuario-detail.component.css"]
})
export class UsuarioDetailComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  usuarioDetail: UsuarioDetail;

  @Input() usuario_id: number;

  loader: any;

  getUsuarioDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuario_id).subscribe(o => { this.usuarioDetail = o; });
  }

  onLoad(params) {
    this.usuario_id = parseInt(params['id']);
    console.log(" en detail " + this.usuario_id);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
