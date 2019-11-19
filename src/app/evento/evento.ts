/**
* Esta clase representa un evento en LesIndestructibles. 
* Contiene toda la informacion relevante de un evento.
*/
export class Evento {
    /**
     * Id del evento
     */
    id: number;

    /**
     * Nombre del evento
     */
    nombre: string;

    /**
     * Categoría del evento
     */
    categoria: string;

    /**
     * Descripción del evento
     */
    descripcion: string;

    /**
     * Fecha de inicio del evento
     */
    fechaInicio: any;

    /**
     * Fecha de fin del evento
     */
    fechaFin: any;

    /**
     * Detalles adicionales del evento
     */
    detallesAdicionales: string;

    /**
     * Entradas restantes del evento
     */
    entradasRestantes: number;


    /**
     * Valor del evento
     */
    valor: number;
    /**
     * Imagen del evento
     */
    imagen :string;
}  