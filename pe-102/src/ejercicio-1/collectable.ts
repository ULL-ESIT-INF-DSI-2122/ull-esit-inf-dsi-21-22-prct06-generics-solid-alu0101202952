/**
 * EJERCICIO PE-102
 * @interface CollectableInterface genérica tipo T
 * @method addItem() recibe el nuevo valor a añadir
 */
interface CollectableInterface<T> {
    addItem(nuevoValor: T): void;
    //getItem(index: number): T;
    //getNumberOfItems(): number;
}

/**
 * @class Collectable que implementa la interfaz genérica CollectableInterface
 * @param items array de tipos genéricos de valores
 */
export class Collectable<T> implements CollectableInterface<T> {
    constructor(private items: T[]) {}
  
    addItem(newItem: T) {
      this.items.push(newItem);
    }
  /*
    getItem(index: number) {
      return this.items[index];
    }
  
    removeItem(existItem: T) {
        this.items.pop(existItem);
    }*/
    
    getNumberOfItems() {
      return this.items.length;
    }
}

/**
 * Salida por pantalla
 */
const collection = new Collectable<number>([1, 2, 3]);
console.log(collection.addItem(4))

