import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuarios-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.css'],
    providers: [DatePipe]
})
export class UsuariosCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new author
    */
    usuario: Usuario;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an author
    */
    createUsuario(): Usuario {

        this.usuarioService.createUsuario(this.usuario)
            .subscribe((usuario) => {
                this.usuario = usuario;
                this.create.emit();
                this.toastrService.success("Se creo el usuario", "La Creacion del usuario");

            });
        return this.usuario;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
    }

}