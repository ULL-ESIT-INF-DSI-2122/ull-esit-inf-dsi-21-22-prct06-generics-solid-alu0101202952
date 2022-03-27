import { Clave } from "./clave";
import { Mensaje } from "./mensaje";

/**
 * EJERCICIO 3: CIFRADO CÉSAR
 * @class CifradoCesar contiene las encriptación y desencriptación del mensaje
 * @param mensaje que se va a tratar
 * @param clave con la que se encripta el mensaje
 */
export class CifradoCesar{
    constructor(protected mensaje: Mensaje, protected clave: Clave){}

    /**
     * Getter del mensaje a cifrar
     * @returns mensaje
     */
    public getMensaje(){
        return this.mensaje;
    }

    /**
     * Getter de la clave a cifrar
     * @returns clave
     */
     public getClave(){
        return this.clave;
    }

    
}