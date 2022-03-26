
export class Series{
    constructor(protected nombre: string, protected autor: string, protected generos: string[] = [], protected anio: number){}

    public getNombre(){
        return this.nombre;
    }
}