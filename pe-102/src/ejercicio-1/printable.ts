interface Printable<T> {
    print(): void;
}

export class PrintableClass<T> implements Printable<T>{
    constructor(private items: T[]) {}

    print() {
        this.items.forEach((indice) => {
            return(this.items);
        });
    }
}


const printable = new PrintableClass<number>([1, 2, 4]);
console.log(printable.print());
