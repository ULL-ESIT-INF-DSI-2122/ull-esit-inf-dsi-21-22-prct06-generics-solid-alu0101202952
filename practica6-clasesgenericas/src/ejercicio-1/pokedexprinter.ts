import { Pokedex } from "./pokedex";

export class PokedexPrinter{
    constructor(private pokedex: Pokedex) {
    }

    print() {
        console.log('¡BIENVENIDO A TU POKEDEX!')
        for (let i: number = 1; i <= this.pokedex.getNumeroLuchadores(); i++) {
            console.log('\nLuchador número: '+i);
            console.log('\nNombre: '+this.pokedex.getLuchadores(i))
        }
    }
}