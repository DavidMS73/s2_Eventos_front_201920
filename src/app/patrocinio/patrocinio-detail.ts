import { Patrocinio } from "./patrocinio";
import { Evento } from "../evento/evento";

export class PatrocinioDetail extends Patrocinio{
        
    /**
     * Representa los eventos que se hacen en ese lugar
     */
    eventos : Evento[];
}