type MundoType = 'Pokemon' | 'Marvel' | 'KimetsuNoYaia' | 'MarioBros'
/**
 * EJERCICIO 1: EL COMBATE DEFINITIVO
 * @abstractclass Fighter permite que un contendiente pueda luchar
 * @param nombre del luchador
 * @param mundo del que pertenece el luchador
 */
export abstract class Fighter {
    constructor(private readonly nombre: string, private mundo: string) {}

    /**
     * Getter del nombre del luchador
     * @returns nombre del luchador
     */
    public getNombreLuchador(){
        return this.nombre;
    }

    /**
     * Setter del nombre del mundo
     * @param nombre_mundo al que pertenece un luchador
     */
    public setNombreMundo(nombre_mundo: string){
        this.mundo = nombre_mundo;
    }

    /**
     * Getter nombre del mundo
     * @returns nombre del mundo al que pertenece un luchador
     */
    public getNombreMundo(){
        return this.mundo;
    }
}