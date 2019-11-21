import { Usuario } from '../../usuario';
import { MedioPago } from '../medioPago';

export class Tarjeta extends MedioPago{
    
    tipoTarjeta: string;

    numeroTarjeta: string;

    expiracion: string;

    cvv: number;
    
    imagen: string;

    numeroCodificado: number;

    usuario: Usuario

    tipoCredito: string;
}