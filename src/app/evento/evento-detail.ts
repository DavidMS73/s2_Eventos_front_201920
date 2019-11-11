import { Evento } from "./evento";
import { Actividadevento } from './actividadevento';
import { Patrocinio } from './patrocinio';
import { Usuario } from './usuario';
import {Memoria} from './memoria';

/**
* Representa un EventoDetail de LesIndestructibles. 
* Contiene toda la información relevante del evento.
*/
export class EventoDetail extends Evento {

  /**
   * Actividades del evento
   */
  actividadesEvento: Actividadevento[];

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
}