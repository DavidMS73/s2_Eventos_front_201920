import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { Usuario } from '../usuario/usuario';
import { UsuarioDetail } from '../usuario/usuario-detail';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';


const API_URL = environment.apiURL;
const usuarios = "/usuarios";

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService, private http: HttpClient, private toastr: ToastrService) { }

    start(): void {
        const role = localStorage.getItem('rol');
        this.setRol(role);
    }

    setRol(rol: string): void {
        this.roleService.flushRoles();
        if (rol === undefined || rol === null || rol === 'INVITADO' || rol === "Invitado") {
            this.roleService.addRole('INVITADO', ['']);
        }
        else if (rol === 'ORG' || rol === "Organizador") {
            this.roleService.addRole('ORG', ['']);
            localStorage.setItem('rol', 'Organizador');
        }
        else if (rol === 'Cliente' || rol === "Cliente" || rol === "Clientes") {
            this.roleService.addRole('CLIENTE', ['']);
            localStorage.setItem('rol', 'Cliente');
        }
        else if (rol === 'RESP' || rol === "Responsable" || rol === "Responsables") {
            this.roleService.addRole('RESP', ['']);
            localStorage.setItem('rol', 'Responsable');
        }
        else {
            this.roleService.addRole('REP', ['']);
            localStorage.setItem('rol', 'Representante');
        }
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    postCliente(user: Usuario): Observable<UsuarioDetail> {
        console.log("entro a esta verga2");
        return this.http.post<UsuarioDetail>(API_URL + usuarios, user);
    }

    getCliente(username: string): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + username);
    }


    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('INVITADO', ['']);
        localStorage.clear();
        this.toastr.success("Se cerró sesión", "Cerrar sesión");
        this.router.navigateByUrl('/');
    }
}
