/**
 * EJERCICIO PE-102
 * @interface Collectable genérica tipo T
 * @method addItem() recibe el nuevo valor a añadir
 */
interface Collectable<T> {
    addItem(nuevoValor: T): void;
    getItem(index: number): T;
    removeItem(): void;
    getNumberOfItems(): number;
}

/**
 * @class CollectableClass que implementa la interfaz genérica Collectable
 * @param items array de tipos genéricos de valores
 */
export class CollectableClass<T> implements Collectable<T> {
    constructor(private items: T[]) {}
  
    /**
     * Método public addItem() añade un valor al array
     * @param newItem a añadir
     */
    public addItem(newItem: T) {
      return(this.items.push(newItem));
    }
  
    /**
     * Método publico getItem() del indice que se indica
     * @param indice 2 entonces posicion 2 del array
     * @returns el valor del indice
     */
    public getItem(indice: number) {
      return this.items[indice];
    }
    
    /**
     * Método public removeItem() borra el último objeto del array
     * @returns el valor borrado
     */
    public removeItem() {
        return(this.items.pop());
    }
    
    /**
     * Método public getNumberOfItems() numero de objetos del array
     * @returns tamaño del array
     */
    public getNumberOfItems() {
      return(this.items.length);
    }
}

/**
 * Salida por pantalla
 */
const collection = new CollectableClass<number>([1, 2, 3]);
console.log(collection.addItem(4));
console.log(collection.getItem(2));
console.log(collection.removeItem());
console.log(collection.getNumberOfItems());
