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

    /**
     * id del usuario
     */
    idUsuario;

    /**
   * Muestra u oculta el componente de editar
   */
    showMap: boolean;

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

    /**
    * Muestra u oculta el componente del mapa
    */
  showHideMap(evento_id: number): void {
    if (!this.showMap) {
      this.showMap = true;
    }
    else {
      this.showMap = false;
    }
  }
}





