import { Clave } from "./clave";
import { Mensaje } from "./mensaje";

/**
 * EJERCICIO 3: CIFRADO CÉSAR
 * @class CifradoCesar contiene las encriptación y desencriptación del mensaje
 * @param mensaje que se va a tratar
 * @param clave con la que se encripta el mensaje
 */
export class CifradoCesar{
    private alfabeto: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
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

    /**
     * Getter del alfabeto a trabajar
     * @returns alfabeto (privado)
     */
    public getAlfabeto(){
        return this.alfabeto;
    }

    /**
     * Generar clave repetida varias veces según el tamaño del mensaje
     * @param mensaje para comprobar tamaño
     * @param clave a repetir
     * @returns clave repetida
     */
    public generarClave(mensaje: Mensaje, clave: String){
        for(let i: number = 0; i < mensaje.getNumeroCaracteres(); i++){
            if(mensaje.getNumeroCaracteres() == i){
                i = 0;
            }// Si la longitud de la clave es igual al tamaño del texto terminamos de repetir 
            if (this.clave.getNumeroCaracteres() == mensaje.getNumeroCaracteres()){
                break;
            }// getCaracteres es como charAt nos devuelve el char del índice que queremos analizar
            clave += this.clave.getCaracteres(i); 
        }
        return clave;
    }

    /*
    public encriptar(mensaje: Mensaje, clave: Clave){
        let resultado = mensaje.getNumeroCaracteres();
        for(let i: number = 0; i < mensaje.getNumeroCaracteres(); i++){
            for(let j: number = 0; j < clave.getNumeroCaracteres(); j++){
                if(resultado >= 65)
            }
            if(contador_clave == clave.getNumeroCaracteres()){
                contador_clave = 0; 
            }
            clave = clave + this.clave.getClave();
        }

    }*/
    
}