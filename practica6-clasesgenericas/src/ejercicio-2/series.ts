/**
 * EJERCICIO 2 DSIFlix
 * @class Series contiene las series de la plataforma
 * @param nombre de la serie
 * @param autor de la serie
 * @param generos de la serie array de strings
 * @param anio de publicación
 */
export class Series{
    constructor(protected nombre: string, protected autor: string, protected generos: string[] = [], protected anio: number){}

    /**
     * Getter del nombre de la serie
     * @returns 
     */
    public getNombre(){
        return this.nombre;
    }
}