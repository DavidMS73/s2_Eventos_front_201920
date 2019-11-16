import { Tarjeta } from "../tarjeta/tarjeta";
import { Pse } from "../pse/pse";
import { Usuario } from "../usuario/usuario";

export class Pago{
    fecha:any;
    tarjeta:Tarjeta;
    pse:Pse;
    usuario:Usuario;
}