import { Fighter } from "./fighter";

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
    
     public getNombre(){
        return this.nombre;
    }
}