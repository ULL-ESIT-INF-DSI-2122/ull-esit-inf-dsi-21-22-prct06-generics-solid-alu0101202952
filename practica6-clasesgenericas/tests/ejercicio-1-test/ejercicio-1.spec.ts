import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);

let marvel1 = new Marvel('Spiderman', 'Hombre araña', 'Mary Jane', [85, 65, 120, 70]);
let marvel2 = new Marvel('Superman', 'Super fuerza', 'Criptonita', [75, 95, 113, 75]);

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


describe('Marvel', () => {
  it('marvel1.getNombre() returns nombre del personaje de Marvel', () => {
    return expect(marvel1.getNombre()).to.be.equal('Spiderman');
  })

  it('marvel1.getSuperPoder() returns superpoder el personaje de Marvel', () => {
    return expect(marvel1.getSuperPoder()).to.be.equal('Hombre araña');
  })

  it('marvel1.getDebilidad() returns debilidad del personaje de Marvel', () => {
    return expect(marvel1.getDebilidad()).to.be.equal('Mary Jane');
  })

  it('marvel1.getEstadisticas() returns estadísticas del personaje de Marvel', () => {
    return expect(marvel1.getEstadisticas()).to.be.eql({ ataque: 85, defensa: 65, velocidad: 120, hp: 70});
  })

  it('marvel1.getAtaque() returns ataque del personaje de Marvel', () => {
    return expect(marvel1.getAtaque()).to.be.eql(85);
  })
  it('marvel1.getDefensa() returns defensa del personaje de Marvel', () => {
    return expect(marvel1.getDefensa()).to.be.eql(65);
  })
  it('marvel1.getVelocidad() returns velocidad del personaje de Marvel', () => {
    return expect(marvel1.getVelocidad()).to.be.eql(120);
  })
  it('marvel1.getHP() returns HP del personaje de Marvel', () => {
    return expect(marvel1.getHP()).to.be.eql(70);
  })
});