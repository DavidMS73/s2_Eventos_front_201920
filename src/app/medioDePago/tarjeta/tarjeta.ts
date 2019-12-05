import { MedioDePago } from "../medioDePago";

export class Tarjeta extends MedioDePago{

    id: number;

    tipoTarjeta: string;

    numeroTarjeta: string;

    expiracion: any;

    cvv: number;

}