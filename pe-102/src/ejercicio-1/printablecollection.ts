import { CollectableClass } from "./collectable"
import { PrintableClass } from "./printable"

/**
 * @class PrintableCollectionAbstract extiende de las clases CollectableClass y PrintableClass
 * @param items del tipo CollectableClass<T> o del tipo U PrintableClass<U>
 */
export abstract class PrintableCollectionAbstract<T extends CollectableClass<T>, U extends PrintableClass<U>>{
    constructor(protected items: (T | U)[]) {}

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
export class PrintableCollection<T extends CollectableClass<T>, U extends PrintableClass<U>> extends PrintableCollectionAbstract<T, U>{
    constructor(items: (T | U)[]) {
        super(items)
    }

    /**
     * Método public addItem() añadir objeto
     * @param newItem 
     * @returns 
     */
    public addItem(newItem: T|U) {
        return(this.items.push(newItem));
      
    }
    
}

/**
 * @class NumericPrintableCollection extiende de la clase abstracta PrintableCollectionAbstract
 */
export class NumericPrintableCollection<T extends CollectableClass<T>, U extends PrintableClass<U>> extends PrintableCollectionAbstract<T, U>{
    constructor(items: (T | U)[]) {
        super(items)
    }

    /**
     * Método public addItem() añadir objeto
     * @param newItem 
     * @returns 
     */
    public addItem(newItem: T|U) {
        return(this.items.push(newItem));
      
    }
    
}

