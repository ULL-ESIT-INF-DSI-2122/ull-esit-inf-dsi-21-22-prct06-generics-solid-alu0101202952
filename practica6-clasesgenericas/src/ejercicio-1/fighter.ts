/**
 * EJERCICIO 1: EL COMBATE DEFINITIVO
 * @abstractclass Fighter permite que un contendiente pueda luchar
 * @param nombre del luchador
 * @param mundo del que pertenece el luchador
 */
export abstract class Fighter {
    constructor(protected readonly nombre: string) {}

    /**
     * Getter del nombre del luchador
     * @returns nombre del luchador
     */
    public getNombreLuchador(){
        return this.nombre;
    }

}