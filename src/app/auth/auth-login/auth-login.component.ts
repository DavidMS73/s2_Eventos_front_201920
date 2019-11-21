import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';


import { ToastrService } from 'ngx-toastr';
import { Credencial } from '../credencial';
import { Usuario } from '../../usuario/usuario';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    user: Usuario;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        let credencial = new Credencial();
        credencial.login = this.user.correo;
        credencial.password = this.user.contrasena;
        this.authService.login(this.user.tipo);

        this.toastrService.success('Logged in');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Organizador', 'Cliente', 'Responsable', 'Representante'];
    }

}
