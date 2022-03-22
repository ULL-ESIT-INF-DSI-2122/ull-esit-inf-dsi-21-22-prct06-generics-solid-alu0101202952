import 'mocha';
import {expect} from 'chai';

/**
 * DUDAS TUTORÍA
 * 1) Posibilidad de variar entre mundos Singleton cambie de un mundo a otro
 * 2) Si mi esquema es correcto
 * 3) Los personajes que luchan tienen que tener sus propios atributos y métodos que heredan de Fighter
 * 4) Qué tiene Fighter, qué puede tener tengo el nombre y añado un type con el mundo
 * 5) se hacen pruebas a una clase abstracta?
 * 6) misma estructura se refiere a que haga un set en Pokedex con los distintos mundos
 */

//import {Fighter} from '../../src/ejercicio-1/fighter';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);

let marvel1 = new Marvel('Spiderman', 'Hombre araña', 'Mary Jane', []);

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

  it('pokemon1.getAtaque() returns ataque del pokemon', () => {
    return expect(pokemon1.getAtaque()).to.be.eql(130);
  })
  it('pokemon1.getDefensa() returns defensa del pokemon', () => {
    return expect(pokemon1.getDefensa()).to.be.eql(60);
  })
  it('pokemon1.getVelocidad() returns velocidad del pokemon', () => {
    return expect(pokemon1.getVelocidad()).to.be.eql(65);
  })
  it('pokemon1.getHP() returns HP del pokemon', () => {
    return expect(pokemon1.getHP()).to.be.eql(65);
  })
});