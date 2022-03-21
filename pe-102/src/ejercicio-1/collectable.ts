interface CollectableInterface<T> {
    addItem(nuevoValor: T): void;
    //getItem(index: number): T;
    //getNumberOfItems(): number;
  }
  
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

const collection = new Collectable<number>([1, 2, 3]);
console.log(collection.addItem(4))

