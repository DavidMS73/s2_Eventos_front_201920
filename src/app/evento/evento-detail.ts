import { Evento } from "./evento";
import { ActividadEvento } from '../actividadevento/actividadevento';
import { Patrocinio } from '../patrocinio/patrocinio';
import { Usuario } from '../usuario/usuario';
import {Memoria} from '../memoria/memoria';
import { Pago } from "../pago/pago";

/**
* Representa un EventoDetail de LesIndestructibles. 
* Contiene toda la información relevante del evento.
*/
export class EventoDetail extends Evento {

  /**
   * Actividades del evento
   */
  actividadesEvento: ActividadEvento[];

  /**
   * Patrocinios del evento
   */
  patrocinios: Patrocinio[];

  /**
   * Usuarios del evento
   */
  usuarios: Usuario[];

  /**
   * Memorias del evento
   */
  memorias:Memoria[];

  pagos: Pago[]; 
}