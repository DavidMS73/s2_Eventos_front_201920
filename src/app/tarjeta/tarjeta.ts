export class Tarjeta{
    private id: number;

    private tipoTarjeta: string;

    private numeroTarjeta: string;

    private expiracion: string;

    private cvv: number;

    constructor(id: number, tipoTarjeta: string, numeroTarjeta: string, expiracion: string, cvv: number){
        this.id = id;

        this.tipoTarjeta = tipoTarjeta;

        this.numeroTarjeta = numeroTarjeta;

        this.expiracion = expiracion;

        this.cvv = cvv;
    }

    getCvv(): number{
        return this.cvv;
    }

    getTipoTarjeta(): string{
        return this.tipoTarjeta;
    }

    getNumeroTarjeta(): string{
        return this.numeroTarjeta;
    }

    getId(): number{
        return this.id;
    }

    getExpiracion(): string{
        return this.expiracion;
    }
}