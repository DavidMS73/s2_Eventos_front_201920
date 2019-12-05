import { Usuario } from "../usuario/usuario";

export class Tarjeta {
    id: number;

    tipoTarjeta: string;

    numeroTarjeta: string;

    expiracion: string;

    cvv: number;

    numeroRecibo: string;

    usuario: Usuario;

}