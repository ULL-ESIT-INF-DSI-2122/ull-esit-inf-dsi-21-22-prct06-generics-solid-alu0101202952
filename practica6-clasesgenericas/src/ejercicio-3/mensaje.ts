/**
 * EJERCICIO 3: CIFRADO CÉSAR
 * @class Mensaje contiene las características del mensaje
 * @param mensaje que se va a tratar
 */
export class Mensaje{
    constructor(protected mensaje: string){}

    /**
     * Getter del mensaje a cifrar
     * @returns mensaje
     */
    public getMensaje(){
        return this.mensaje;
    }
}