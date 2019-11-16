import { Usuario } from "./usuario";
import { Tarjeta } from "../tarjeta/tarjeta";
import { Pse } from "../pse/pse";
import { Evento } from "../evento/evento";
import { Pago } from "../pago/pago";

export class UsuarioDetail extends Usuario{
    tarjetas: Tarjeta[];
    pses:Pse[];
    eventos:Evento[];
    pagos :Pago[];

    
}
