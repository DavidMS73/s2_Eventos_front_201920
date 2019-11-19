import { Evento } from '../evento/evento'

export class Memoria {
  /**
   * El identificador de la memoria
   */
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
  fecha: any; //any
/**
 * Representa la multimedia 
 */
  imagen: string;
}