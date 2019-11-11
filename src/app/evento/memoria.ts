import { Evento } from '../evento/evento'

/**
* Esta clase representa una memoria en LesIndestructibles. 
* Contiene toda la informacion relevante de una memoria.
*/
export class Memoria {
  id: number;
  /**
   * Atributo que modela el lugar de la memoria
   */
  lugar: string;

  /**
   * Atributo que modela el evento de la memoria
   */
  evento: Evento;

  /**
   * Atributo que modela la fecha de la memoria
   */
  fecha: Date; //any
}