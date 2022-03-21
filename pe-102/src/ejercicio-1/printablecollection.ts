import { CollectableClass } from "./collectable"
import { PrintableClass } from "./printable"

export abstract class PrintableCollectionAbstract<T extends CollectableClass<T>, U extends PrintableClass<U>>{
    constructor(protected items: (T | U)[]) {}


    public addItem(newItem: T) {
        return(this.items.push(newItem));
      
    }
}

export class PrintableCollection<T extends CollectableClass<T>, U extends PrintableClass<U>> extends PrintableCollectionAbstract <T, U>{
    constructor(items: (T | U)[]) {
        super(items)
    }

    public addItem(newItem: T|U) {
        return(this.items.push(newItem));
      
    }
    
}

