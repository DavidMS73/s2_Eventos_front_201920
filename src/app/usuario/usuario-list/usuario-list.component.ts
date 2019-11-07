import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  /**
       * The list of users which belong to the Events
   */
  usuarios: Usuario[] = [{ id: 12, nombre: "Juan Camilo", correo: "jcfg", contrasena: "12345678", estudios: "Isis", codigoQR: "10101010001", empresa: "Google" }, { id: 13, nombre: "Juan JOse", correo: "jcf567g", contrasena: "12347455678", estudios: "Indusplay", codigoQR: "1013401010001", empresa: "Facebook" }];
  constructor() { }

  ngOnInit() {
  }

}