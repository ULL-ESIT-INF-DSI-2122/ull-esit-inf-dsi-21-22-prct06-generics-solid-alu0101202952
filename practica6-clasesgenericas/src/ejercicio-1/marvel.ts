import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class Marvel extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo Marvel
 * @param nombre tiene el nombre del superhéroe (string)
 * @param superpoder tiene la habilidad del personaje (string)
 * @param debilidad tiene la debilidad del personaje (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del personaje marvel (number [])
 */
export class Marvel extends Fighter{
    protected estadisticas = {
        ataque: 0,
        defensa: 0, 
        velocidad: 0,
        hp: 0,
    }

    constructor(nombre: string, protected superpoder: string, protected debilidad: string, estadisticas: number []) {
        super(nombre);
        this.estadisticas.ataque = estadisticas[0];
        this.estadisticas.defensa = estadisticas[1];
        this.estadisticas.velocidad = estadisticas[2];
        this.estadisticas.hp = estadisticas[3];
    }

    /**
     * Getter del nombre del superhéroe de Marvel
     * @returns nombre del superhéroe
     */
    public getNombre(){
        return this.nombre;
    }

    /**
     * Setter superpoder del superhéroe
     * @param superpoder del superhéroe
     */
    public setSuperPoder(superpoder: string) {
        this.superpoder = superpoder;
    }

    /**
     * Getter del superpoder del superhéroe
     * @returns superpoder del superhéroe
     */
    public getSuperPoder(){
        return this.superpoder;
    }

    /**
     * Setter debilidad del superhéroe
     * @param debilidad del superhéroe
     */
    public setDebilidad(debilidad: string) {
        this.debilidad = debilidad;
    }

    /**
     * Getter de la debilidad del superhéroe
     * @returns debilidad del superhéroe
     */
    public getDebilidad(){
        return this.debilidad;
    }

    /**
     * Setter Estadísticas del superhéroe
     * @param estadisticas del superhéroe
     */
    public setEstadisticas(estadisticas: number []) {
        estadisticas.forEach(elemento => {
            estadisticas.push(elemento);
        })
    }

    /**
     * Getter de las estadísticas del superhéroe
     * @returns estadisticas del superhéroe
     */
    public getEstadisticas(){
        return this.estadisticas;
    }

    /**
     * Getter del ataque del superhéroe
     * @returns ataque del superhéroe
     */
    public getAtaque(){
        return this.estadisticas.ataque;
    }

    /**
     * Getter de ladefensa del superhéroe
     * @returns defensa del superhéroe
     */
    public getDefensa(){
        return this.estadisticas.defensa;
    }

    /**
     * Getter de la velocidad del superhéroe
     * @returns velocidad del superhéroe
     */
    public getVelocidad(){
        return this.estadisticas.velocidad;
    }

    /**
     * Getter del daño máximo del superhéroe
     * @returns daño máximo del superhéroe
     */
    public getHP(){
        return this.estadisticas.hp;
    }
}