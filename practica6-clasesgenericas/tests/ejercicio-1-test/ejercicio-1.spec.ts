import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';
import {Combat} from '../../src/ejercicio-1/combat';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);
let pokedex = new Pokedex([pokemon1, pokemon2]);
let combate = new Combat(pokemon1, pokemon2);

let daño_pokemon1: number = 50 * (pokemon1.getAtaque() / pokemon2.getDefensa()) * 1;
let daño_pokemon2: number = 50 * (pokemon2.getAtaque() / pokemon1.getDefensa()) * 1;

describe('Pokemon', () => {
  it('pokemon1.getNombre() returns nombre del pokemon', () => {
      return expect(pokemon1.getNombre()).to.be.equal('Flareon');
  })

  it('pokemon1.getPeso() returns peso del pokemon', () => {
    return expect(pokemon1.getPeso()).to.be.equal(25);
  })

  it('pokemon1.getAltura() returns altura del pokemon', () => {
    return expect(pokemon1.getAltura()).to.be.equal(0.9);
  })

  it('pokemon1.getTipo() returns tipo del pokemon', () => {
    return expect(pokemon1.getTipo()).to.be.equal('Fuego');
  })

  it('pokemon1.getEstadisticas() returns estadísticas del pokemon', () => {
    return expect(pokemon1.getEstadisticas()).to.be.eql({ ataque: 130, defensa: 60, velocidad: 65, hp: 65});
  })
  
});

describe('Pokedex', () => {
  it('pokedex.getPokemons() returns pokemons de la pokedex', () => {
    return expect(pokedex.getPokemons()).to.be.eql([pokemon1, pokemon2]);
  })

});

describe('Combat, describe el combate entre dos pokemon', () => {
  it('combate.start() returns pokemons daño es igual a 100', () => {
    return expect(combate.start()).to.be.eql(100);
  })

});