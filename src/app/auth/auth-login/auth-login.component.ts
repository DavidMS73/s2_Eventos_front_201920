import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';


import { ToastrService } from 'ngx-toastr';
import { Credencial } from '../credencial';
import { Usuario } from '../../usuario/usuario';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { Router } from '@angular/router';

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
        private router: Router
    ) { }
    
    credencial: Credencial;
    user: UsuarioDetail;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.user = new UsuarioDetail();
        this.authService.getCliente(this.credencial.login)
        .subscribe(userDet => {
            this.user = userDet;
            localStorage.setItem('id', userDet.id.toString());
            this.toastrService.success('Logged in');
        })
        this.router.navigateByUrl('/');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new UsuarioDetail();
        this.roles = ['Organizador', 'Cliente', 'Responsable', 'Representante'];
    }

}
