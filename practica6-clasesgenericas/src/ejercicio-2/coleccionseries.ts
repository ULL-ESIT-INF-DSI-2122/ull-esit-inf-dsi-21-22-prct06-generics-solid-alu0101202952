import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Series } from "./series";

/**
 * EJERCICIO 2: DXIFlix
 * @class ColeccionSeries extiende de BasicStreamableCollection<Series> especializado en series
 * @param videos tipo Series que tiene todas las series de la plataforma
 */
export class ColeccionSeries extends BasicStreamableCollection<Series>{
    constructor(protected videos: Series[]){
        super(videos);
    }

    /**
     * Getter Serie por el nombre
     * @param nombre de la serie a encontrar
     * @returns la serie si existe o una sentencia porque no la encontró
     */
    public getVideoByName(nombre: string){
        let resultado: Series []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getNombre() == nombre){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Serie no encontrada');
            }
        }
        return resultado;
    }

    public getVideoByYear(anio: number){

    }

    public getVideoByAuthor(autor: string){

    }

    public eliminateVideoByName(nombre: string){

    } 
}

let serie1 = new Series('Juego de Tronos', 'George R. R. Martin', ['Aventura', 'Drama', 'Fantasía', 'Medieval'], 1996);
let serie2 = new Series('Vikingos', 'Michael Hirst', ['Histórico', 'Drama', 'Fantasía', 'Acción'], 2013);
let serie3 = new Series('Fugitiva', 'Joaquín Oristrell', ['Thriller'], 2018);
let coleccionseries = new ColeccionSeries([serie1, serie2, serie3]);

coleccionseries.getVideoByName('Fugitiva');