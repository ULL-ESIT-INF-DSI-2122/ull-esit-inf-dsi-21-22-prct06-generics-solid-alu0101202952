type MundoType = 'Pokemon' | 'Marvel' | 'KimetsuNoYaiba' | 'OnePiece';
/**
 * EJERCICIO 1: EL COMBATE DEFINITIVO
 * @abstractclass Fighter permite que un contendiente pueda luchar
 * @param nombre del luchador
 * @param estadisticas del luchador
 * @param mundo del luchador (type Mundo al que pertenece)
 */
export abstract class Fighter {
    protected estadisticas = {
        ataque: 0,
        defensa: 0, 
        velocidad: 0,
        hp: 0,
    }
    constructor(protected nombre: string, protected mundo: MundoType,estadisticas: number []) {
        this.estadisticas.ataque = estadisticas[0];
        this.estadisticas.defensa = estadisticas[1];
        this.estadisticas.velocidad = estadisticas[2];
        this.estadisticas.hp = estadisticas[3];
    }

    /**
     * Getter del nombre del luchador
     * @returns nombre del luchador
     */
    public getNombreLuchador(){
        return this.nombre;
    }

    /**
     * Getter del nombre del mundo del luchador
     * @returns nombre del mundo del luchador
     */
    public getMundo(){
        return this.mundo;
    }

    /**
     * Retorna si es o no del mismo mundo
     * @returns true si es del mismo mundo los personajes
     * @returns false si no lo son
     */
    public isMismoMundo(mundo1: MundoType, mundo2: MundoType){
        if(mundo1 == mundo2){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Getter de las estadísticas del cazador de demonios
     * @returns estadisticas del cazador de demonios
     */
     public getEstadisticas(){
        return this.estadisticas;
    }

    /**
     * Getter del ataque del cazador de demonios
     * @returns ataque del cazador de demonios
     */
    public getAtaque(){
        return this.estadisticas.ataque;
    }

    /**
     * Getter de ladefensa del cazador de demonios
     * @returns defensa del cazador de demonios
     */
    public getDefensa(){
        return this.estadisticas.defensa;
    }

    /**
     * Getter de la velocidad del cazador de demonios
     * @returns velocidad del cazador de demonios
     */
    public getVelocidad(){
        return this.estadisticas.velocidad;
    }

    /**
     * Getter del daño máximo del cazador de demonios
     * @returns daño máximo del cazador de demonios
     */
    public getHP(){
        return this.estadisticas.hp;
    }
}