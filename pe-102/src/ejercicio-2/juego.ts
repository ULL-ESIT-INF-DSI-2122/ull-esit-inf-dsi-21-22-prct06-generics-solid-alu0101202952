import { Tablero } from "./tablero";

const JUGADOR_1 = 1
const JUGADOR_2 = 2
const COLOR_1 = 'Rojo'
const COLOR_2 = 'Amarillo'

/**
 * EJERCICIO 2. Conecta 4
 * @class Juego, hereda de class Tablero
 * @param tablero tablero
 * @param filas del tablero (6)
 * @param columnas del tablero (7)
 */
export class Juego extends Tablero{
    constructor(private tablero: Tablero, protected filas: number, protected columnas: number){
        super(filas, columnas);
    }

    /**
     * Método público turno para ver columnas llenas
     * @param tablero que se mira
     * @param columna que se comprueba si está llena
     * @returns true si está llena
     * @returns false si está vacía
     */
    public columnaLLena(tablero: Tablero, columna: number){
        const columnaLlena = tablero.getColumnas(columna);
        if(columnaLlena == -1 || columna ==-1) { //La fila está llena se marca un error para rellena  
            console.log('La columna está llena, no se puede introducir ficha');
            return true;
        } else {
            return false;
        }
    }

    /**
     * Método público que coloca las fichas con sus colores
     * @param tablero en el que se coloca
     * @param columna en la que se coloca
     * @param jugador que coloca la pieza de un determinado color
     * @returns true al colocarlo
     * @returns false al no
     */
    public colocarPieza(tablero: Tablero, columna: number, jugador: number){
        let color = COLOR_1;
        if(jugador == JUGADOR_2) {
            color == COLOR_2;
            for(let i: number = 0; i < this.getFilas(); i++) {
                for(let j: number = 0; j < this.getColumnas(columna); j++) {
                    tablero.pushFicha(parseInt(color));
                }
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Método público comprobar que el ganador tiene 4 fichas seguidas del mismo color
     * @param tablero sobre el que se comprueba 
     * @param columna que se le pasa
     * @param jugador que puntúa con el color
     */
    public ganador(tablero: Tablero, columna: number, jugador: number){
        let contador: number = 0;
        let color = COLOR_1;
        while(contador) {
            this.colocarPieza(tablero, columna, jugador);
            contador++;
            return true;
        } 
        if (contador >= 8){

        }
        return false;
    }
    
}

/**
 * Salida por pantalla
 */
let tablero = new Tablero(6,7);
let juego = new Juego(tablero, 6, 7);

console.log(juego.colocarPieza(tablero, 1, 1));
console.log(juego.ganador(tablero, 1, 1));