import 'mocha';
import {expect} from 'chai';
//import {Fighter} from '../../src/ejercicio-1/fighter';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);

describe('Pokemon', () => {
  it('pokemon1.getNombre() returns nombre del pokemon', () => {
    return expect(pokemon1.getNombre()).to.be.equal('Flareon');
  })
  
});