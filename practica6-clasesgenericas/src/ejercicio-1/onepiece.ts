import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class OnePiece extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo anime de One Piece (son piratas)
 * @param nombre tiene el nombre del pirata (string)
 * @param fruta tiene la fruta del diablo que le da su habilidad al pirata(string)
 * @param habilidad tiene la habilidad del pirata (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del pirata (number [])
 */
export class OnePiece extends Fighter{
    protected estadisticas = {
        ataque: 0,
        defensa: 0, 
        velocidad: 0,
        hp: 0,
    }

    constructor(nombre: string, protected fruta: string, protected habilidad: string, estadisticas: number []) {
        super(nombre);
        this.estadisticas.ataque = estadisticas[0];
        this.estadisticas.defensa = estadisticas[1];
        this.estadisticas.velocidad = estadisticas[2];
        this.estadisticas.hp = estadisticas[3];
    }

    /**
     * Getter del nombre del pirata 
     * @returns nombre del pirata
     */
    public getNombre(){
        return this.nombre;
    }

    /**
     * Getter del nombre de la fruta que le otorga las habilidades del pirata 
     * @returns nombre de la fruta que le otorga las habilidades del pirata
     */
     public getFruta(){
        return this.fruta;
    }
}