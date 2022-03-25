import { Fighter } from "./fighter";
import { Pokemon } from "./pokemon";
/**
 * EJERCICIO 1.
 * @class Combat, tiene las especificaciones del combate entre luchadores de los mundos de Pokemon | Marvel | KimetsuNoYaiba | OnePiece (Fighter)
 * @param contendiente1 tiene las características del contendiente1 (tuyo)
 * @param contendiente2 tiene las características del contendiente2
 *  (rival)
 */
export class Combat {
    constructor(private contendiente1: Fighter, private contendiente2: Fighter){
    }

    /**
     * Método público que inicializa el combate entre luchadores del mismo y distinto mundo
     * @returns el daño que se inflige en el combate entre luchadores del mismo y distinto mundo
     */
    public start(){
        let efectividad1: number = 1;
        let efectividad2: number = 1;
        let daño_pokemon1: number = 0;
        let daño_pokemon2: number = 0;
        console.log('\nInicio del combate!!\n');

        if(this.contendiente1.getVelocidad() > this.contendiente2.getVelocidad()){
            while (this.contendiente1.getHP() > 0 || this.contendiente2.getHP() > 0){
                if(this.contendiente1 instanceof Pokemon && this.contendiente2 instanceof Pokemon){
                    if (this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Agua" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Agua") {
                        efectividad1 = efectividad1 * 2;
                        efectividad2 = efectividad2 * 0.5;
                    } else if (this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Agua" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Eléctrico") {
                        efectividad1 = efectividad1 * 0.5;
                        efectividad2 = efectividad2 * 2;
                    } else if (this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Eléctrico" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Eléctrico") {
                        efectividad1 = efectividad1 * 1;
                        efectividad2 = efectividad2 * 1;
                    } else {
                        efectividad1 = efectividad1 * 0.5;
                        efectividad2 = efectividad2 * 0.5;
                    }
                }
                
            }
            
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


