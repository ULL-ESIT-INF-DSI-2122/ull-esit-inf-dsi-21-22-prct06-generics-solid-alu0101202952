/**
 * EJERCICIO 2. Conecta 4
 * @class Tablero, tiene la generación del tablero a trabajar
 * @param filas del tablero (6)
 * @param columnas del tablero (7)
 */
export class Tablero{
    constructor (protected filas: number, protected columnas: number){}

    /**
     * Método público que genera el tablero llenando el array con el espacio reservado de filas y columnas
     */
    public generarTablero(){
        let tablero: number [] = [];
        for (let i: number = 0; i < this.filas; i++) {
            for (let j: number = 0; j < this.columnas; j++) {
                tablero.push(i*j);
            }
        }
    }

    public pushFicha(elemento: number){
        let tablero: number [] = [];
        for (let i: number = 0; i < this.filas; i++) {
            for (let j: number = 0; j < this.columnas; j++) {
                tablero.push(elemento);
            }
        }
    }

    /**
     * Getter filas que no sean nulas
     * @returns filas
     */
    public getFilas(){
        for (let i: number = this.filas; i >= 0; i--) {
            if (tablero.columnas == null) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Getter columnas que no sean nulas
     * @returns columnas
     */
    public getColumnas(columna: number){
        for (let i: number = this.columnas; i >= 0; i--) {
            if (tablero.filas == null || columna == null) {
                return i;
            }
        }
        return -1;
    }
}

/**
 * Salida por pantalla
 */
let tablero = new Tablero(6,7);
tablero.generarTablero();
console.log(tablero);

console.log(tablero.getFilas());
console.log(tablero.getColumnas(1));