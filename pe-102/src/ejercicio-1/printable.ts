/**
 * EJERCICIO 1 PE-102 Printable
 * @interface Printable implementa el método print
 * @method print() imprime
 */
interface Printable<T> {
    print(): void;
}

/**
 * @class PrintableClass implementa la interfaz Printable con el método print()
 * @param recibe el array de valores a imprimir
 */
export class PrintableClass<T> implements Printable<T>{
    constructor(private items: T[]) {}

    /**
     * @method print() imprime el array
     */
    public print() {
        this.items.forEach((indice) => {
            return(this.items);
        });
    }
}

/**
 * Salida por pantalla
 */
const printable = new PrintableClass<number>([1, 2, 4]);
console.log(printable.print());
