import { Evento } from "./evento";
import { Actividadevento } from './actividadevento';
import { Patrocinio } from './patrocinio';
import { Usuario } from './usuario';
import {Memoria} from './memoria';
export class EventoDetail extends Evento {
  actividades: Actividadevento[];
  patrocinios: Patrocinio[];
  invitadosespeciales: Usuario[];
  memorias:Memoria[];
}