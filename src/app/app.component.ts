import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

/**
 * The app component. This component is the base of s2_eventos-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    idUsuario;

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;

    darValor(): void {
        this.idUsuario = localStorage.getItem('id');
    }

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s2_eventos-Front";
        this.authService.start();
    }

    /**
  * @ignore
  */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

    darIdActual(): string {
        return localStorage.getItem("id");
    }
}





