import { MedioDePago } from "../medioDePago";

export class Tarjeta extends MedioDePago{

    tipoTarjeta: string;

    numeroTarjeta: string;

    expiracion: string;

    cvv: number;

    numeroRecibo:string;
}