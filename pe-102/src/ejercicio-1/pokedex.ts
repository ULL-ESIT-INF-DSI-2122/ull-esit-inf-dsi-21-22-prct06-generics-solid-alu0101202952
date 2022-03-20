import { Pokemon } from "./pokemon";

/**
 * EJERCICIO 1.
 * @class Pokedex, tiene los pokemons
 * @param pokemons tiene el array con los pokemon que lo componen
 */
export class Pokedex{
    constructor(private pokemons: Pokemon [] = []) {
    }

    /**
     * Setter de añadir pokemons a la Pokedex
     * @param nombre del pokemon
     */
    public setPokemons(nombre: Pokemon){
        for (let i: number = 0; i < this.pokemons.length; i++) {
            this.pokemons.push(nombre);
        }
    }

    /**
     * Getter de los pokemons de la Pokedex
     * @returns los pokemons
     */
    public getPokemons(){
        this.pokemons.forEach(pokemon => {
            console.log(pokemon);
        });
        return this.pokemons
    }
}

/**
 * Salidas por pantalla
 */
/*let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokedex = new Pokedex([pokemon1]);

pokedex.setPokemons(pokemon1);
console.log(pokedex);
console.log(pokedex.getPokemons());*/