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
    fechaInicio: Date;

    /**
     * Fecha de fin del evento
     */
    fechaFin: Date;

    /**
     * Detalles adicionales del evento
     */
    detallesAdicionales: string;

    /**
     * Entradas restantes del evento
     */
    entradasRestantes: number;

    /**
     * El evento es pago o no
     */
    esPago: boolean;

    /**
     * Valor del evento
     */
    valor: number;
}  