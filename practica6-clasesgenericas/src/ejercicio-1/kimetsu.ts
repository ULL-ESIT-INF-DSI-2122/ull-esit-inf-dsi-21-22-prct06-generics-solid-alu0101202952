import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class KimetsuNoYaiba extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo anime de Kimetsu no Yaiba (cazadores de demonios)
 * @param nombre tiene el nombre del cazador de demonios (string)
 * @param respiracion es el poder que domina el cazador de demonios (string) que lleva una katana
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del personaje de Kimetsu no Yaiba (number [])
 */
export class KimetsuNoYaiba extends Fighter{
    protected estadisticas = {
        ataque: 0,
        defensa: 0, 
        velocidad: 0,
        hp: 0,
    }

    constructor(nombre: string, protected respiracion: string, estadisticas: number []) {
        super(nombre);
        this.estadisticas.ataque = estadisticas[0];
        this.estadisticas.defensa = estadisticas[1];
        this.estadisticas.velocidad = estadisticas[2];
        this.estadisticas.hp = estadisticas[3];
    }

    /**
     * Getter del nombre del cazador de demonios
     * @returns nombre del cazador de demonios
     */
    public getNombre(){
        return this.nombre;
    }

    public getRespiracion(){
        return this.respiracion;
    }
}