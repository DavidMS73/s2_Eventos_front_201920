import { Lugar } from "./lugar";
import { Evento } from "../evento/evento";

export class LugarDetail extends Lugar{
        
    /**
     * Representa los eventos que se hacen en ese lugar
     */
    eventos : Evento[];
}