import { Pokemon } from "./pokemon";

/**
 * EJERCICIO 1.
 * @class Combat, tiene las especificaciones del combate entre ambos pokemons
 * @param pokemon1 tiene las características del pokemon 1 (tuyo)
 * @param pokemon2 tiene las características del pokemon 2 (rival)
 */
export class Combat {
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon){
    }

    /**
     * Método público que inicializa el combate pokemon
     * @returns el daño que se inflige en el combate
     */
    public start(){
        let efectividad1: number = 1;
        let efectividad2: number = 1;
        let daño_pokemon1: number = 0;
        let daño_pokemon2: number = 0;

        if (this.pokemon1.getTipo() == "Fuego" && this.pokemon2.getTipo() == "Hierba" || this.pokemon1.getTipo() == "Agua" && this.pokemon2.getTipo() == "Fuego" || this.pokemon1.getTipo() == "Hierba" && this.pokemon2.getTipo() == "Agua" || this.pokemon1.getTipo() == "Eléctrico" && this.pokemon2.getTipo() == "Agua") {
            efectividad1 = efectividad1 * 2;
            efectividad2 = efectividad2 * 0.5;
        } else if (this.pokemon1.getTipo() == "Hierba" && this.pokemon2.getTipo() == "Fuego" || this.pokemon1.getTipo() == "Fuego" && this.pokemon2.getTipo() == "Agua" || this.pokemon1.getTipo() == "Agua" && this.pokemon2.getTipo() == "Hierba" || this.pokemon1.getTipo() == "Agua" && this.pokemon2.getTipo() == "Eléctrico") {
            efectividad1 = efectividad1 * 0.5;
            efectividad2 = efectividad2 * 2;
        } else if (this.pokemon1.getTipo() == "Hierba" && this.pokemon2.getTipo() == "Eléctrico" || this.pokemon1.getTipo() == "Eléctrico" && this.pokemon2.getTipo() == "Hierba" || this.pokemon1.getTipo() == "Eléctrico" && this.pokemon2.getTipo() == "Fuego" || this.pokemon1.getTipo() == "Fuego" && this.pokemon2.getTipo() == "Eléctrico") {
            efectividad1 = efectividad1 * 1;
            efectividad2 = efectividad2 * 1;
        } else {
            efectividad1 = efectividad1 * 0.5;
            efectividad2 = efectividad2 * 0.5;
        }

   
        daño_pokemon1 = 50 * (this.pokemon1.getAtaque() / this.pokemon2.getDefensa()) * efectividad1;
        daño_pokemon1 = Math.round(daño_pokemon1);
        daño_pokemon2 = 50 * (this.pokemon2.getAtaque() / this.pokemon1.getDefensa()) * efectividad2;
        daño_pokemon2 = Math.round(daño_pokemon2);
        
        console.log('El tipo de tu pokemon es: '+this.pokemon1.getTipo()+'\nContra un pokemon oponente del tipo: '+this.pokemon2.getTipo()+'\nTu ataque es: '+this.pokemon1.getAtaque()+'\nContra la defensa de tu rival: '+this.pokemon2.getDefensa());

        console.log('\nTu pokemon causa un daño de '+daño_pokemon1);

        console.log('\nAhora es el turno del pokemon rival, este causa un daño de '+daño_pokemon2+' a tu pokemon');

        return daño_pokemon1;
    }
}

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);
let combate = new Combat(pokemon1, pokemon2);
console.log(combate.start());


