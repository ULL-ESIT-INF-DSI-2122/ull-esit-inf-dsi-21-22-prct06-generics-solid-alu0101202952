import { CollectableClass } from "./collectable"
import { PrintableClass } from "./printable"

/**
 * @class PrintableCollectionAbstract extiende de las clases CollectableClass y PrintableClass
 * @param items del tipo CollectableClass<T> o del tipo U PrintableClass<U>
 */
export abstract class PrintableCollectionAbstract<T extends CollectableClass<T> | PrintableClass<T>>{
    constructor(protected items: (T)[]) {}

    /**
     * Método público addItem()
     * @param newItem a añadir
     * @returns el array
     */
    public addItem(newItem: T) {
        return(this.items.push(newItem));
      
    }
}

/**
 * @class PrintableCollection extiende de la clase abstracta genérica
 */
export class PrintableCollection<T extends CollectableClass<T> | PrintableClass<T>> extends PrintableCollectionAbstract<T>{
    constructor(items: (T)[]) {
        super(items)
    }

    /**
     * Método public addItem() añadir objeto
     * @param newItem 
     * @returns 
     */
    public addItem(newItem: T) {
        return(this.items.push(newItem));
      
    }
    
}

/**
 * @class NumericPrintableCollection extiende de la clase abstracta PrintableCollectionAbstract
 */
export class NumericPrintableCollection<T extends CollectableClass<T> | PrintableClass<T>> extends PrintableCollectionAbstract<T>{
    constructor(items: (T)[]) {
        super(items)
    }

    /**
     * Método public print() imprimir
     * @returns 
     */
    public print() {
        this.items.forEach((indice) => {
            return(this.items+','+indice);
        });
      
    }
    
}

