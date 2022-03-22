export abstract class Fighter {
    constructor(private readonly nombre: string, private mundo: string) {}

    public getNombreLuchador(){
        return this.nombre;
    }

    public setNombreMundo(nombre_mundo: string){
        this.mundo = nombre_mundo;
    }

    public getNombreMundo(){
        return this.mundo;
    }
}