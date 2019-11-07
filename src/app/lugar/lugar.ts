import { Evento } from '../evento/evento'

export class Lugar
{
    /**
     * Representa el id del lugar
     */
    id : number;

    /**
     * Representa la capacidad de asistentes
     */
    capacidadAssitentes : number;

    /**
     * Representa la ubicacion geografica
     */
    ubicacionGeografica : string;

    /**
     * Representa el bloque donde se hara el evento
     */
    bloque : string;

    /**
     * Representa el piso donde serà el evento
     */
    piso : string;

    /**
     * Representa el salon donde serà el evento
     */
    salon : string;

    /**
     * Representa el nombre del lugar
     */
    nombre : string;
}