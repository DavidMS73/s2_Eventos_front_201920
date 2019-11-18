import { Usuario } from './usuario';

export class Tarjeta{
    
    id: number;

    tipoTarjeta: string;

    numeroTarjeta: string;

    expiracion: string;

    cvv: number;

    usuario: Usuario

}