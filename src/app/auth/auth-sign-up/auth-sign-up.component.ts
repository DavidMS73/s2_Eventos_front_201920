import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { Usuario } from '../../usuario/usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    user: Usuario;

    nombre: string;

    correo: string;

    contrasena: string;

    codigoQR: string;

    tipo:string;

    roles: String[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        let ed;
            this.authService.postCliente(this.user).subscribe(usuarioBD => {
                console.log("entro a esta verga");
                this.user = usuarioBD;
                localStorage.setItem('id', usuarioBD.id.toString());
                let id = usuarioBD.id;
                ed = id;
                localStorage.setItem('correo', usuarioBD.correo);
                this.toastrService.success("Se registró usuario");
            });
            this.authService.setRol(this.user.tipo);
            this.router.navigateByUrl('/');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Organizador', 'Cliente', 'Responsable', 'Representante'];
    }

}
