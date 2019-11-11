/**
* Esta clase representa un usuario en LesIndestructibles. 
* Contiene toda la informacion relevante de un usuario.
*/
export class Usuario {
    /**
     * Id del usuario
     */
    id: number;

    /**
     * Nombre del usuario
     */
    nombre: string;

    /**
     * Correo del usuario
     */
    correo: string;

    /**
     * Contraseña del usuario
     */
    contrasena: string;

    /**
     * Tipo de usuario
     */
    tipo: string;

    /**
     * Código QR del usuario
     */
    codigoQR: string;
}