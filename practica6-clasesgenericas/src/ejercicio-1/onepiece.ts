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

    /**
     * Getter del nombre de la habilidad del pirata 
     * @returns nombre de la habilidad del pirata
     */
    public getHabilidad(){
        return this.habilidad;
    }

    /**
     * Setter Estadísticas del pirata
     * @param estadisticas del pirata
     */
    public setEstadisticas(estadisticas: number []) {
        estadisticas.forEach(elemento => {
            estadisticas.push(elemento);
        })
    }

    /**
     * Getter de las estadísticas del pirata
     * @returns estadisticas del pirata
     */
    public getEstadisticas(){
        return this.estadisticas;
    }

    /**
     * Getter del ataque del pirata
     * @returns ataque del pirata
     */
    public getAtaque(){
        return this.estadisticas.ataque;
    }

    /**
     * Getter de ladefensa del pirata
     * @returns defensa del pirata
     */
    public getDefensa(){
        return this.estadisticas.defensa;
    }

    /**
     * Getter de la velocidad del pirata
     * @returns velocidad del pirata
     */
    public getVelocidad(){
        return this.estadisticas.velocidad;
    }

    /**
     * Getter del daño máximo del pirata
     * @returns daño máximo del pirata
     */
    public getHP(){
        return this.estadisticas.hp;
    }
}