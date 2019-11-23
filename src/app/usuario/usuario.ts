import {Evento} from "../evento/evento";
import {Pago} from "../pago/pago"
import { Tarjeta } from "../tarjeta/tarjeta";
import {Pse} from "../pse/pse";
export class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    codigoQR: string;
    tipo: string;
    username: string;

    
}