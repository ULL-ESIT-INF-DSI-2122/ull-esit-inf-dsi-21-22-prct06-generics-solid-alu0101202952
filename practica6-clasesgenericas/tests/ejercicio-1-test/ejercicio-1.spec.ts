import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {KimetsuNoYaiba} from '../../src/ejercicio-1/kimetsu';
import {OnePiece} from '../../src/ejercicio-1/onepiece';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);

let marvel1 = new Marvel('Spiderman', 'Hombre araña', 'Mary Jane', [85, 65, 120, 70]);
let marvel2 = new Marvel('Superman', 'Super fuerza', 'Criptonita', [75, 95, 113, 75]);

let tanjiro = new KimetsuNoYaiba('Tanjiro', 'Agua', [115, 90, 60, 95]);
let zenitsu = new KimetsuNoYaiba('Zenitsu', 'Rayo', [112, 75, 143, 88]);
let inosuke = new KimetsuNoYaiba('Inosuke', 'Bestia', [100, 135, 45, 45]);

let luffy = new OnePiece('Monkey D. Luffy', 'Paramecia', 'Goma', [120, 100, 90, 100]);
let sanji = new OnePiece('Sanji', 'Ninguna', 'Patadas', [95, 67, 122, 72]);
let choper = new OnePiece('Choper', 'Zoan', 'Reno', [84, 78, 100, 78]);

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

describe('Kimetsu', () => {
  it('zenitsu.getNombre() returns nombre del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getNombre()).to.be.equal('Zenitsu');
  })

  it('zenitsu.getRespiracion() returns superpoder(respiracion de un elemento) el personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getRespiracion()).to.be.equal('Rayo');
  })

  it('zenitsu.getEstadisticas() returns estadísticas del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getEstadisticas()).to.be.eql({ ataque: 112, defensa: 75, velocidad: 143, hp: 88});
  })

  it('zenitsu.getAtaque() returns ataque del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getAtaque()).to.be.eql(112);
  })
  it('zenitsu.getDefensa() returns defensa del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getDefensa()).to.be.eql(75);
  })
  it('zenitsu.getVelocidad() returns velocidad del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getVelocidad()).to.be.eql(143);
  })
  it('zenitsu.getHP() returns HP del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getHP()).to.be.eql(88);
  })
});

describe('One Piece', () => {
  it('luffy.getNombre() returns nombre del personaje de One Piece', () => {
    return expect(luffy.getNombre()).to.be.equal('Monkey D. Luffy');
  })
  it('luffy.getFruta() returns nombre de la fruta del diablo si tiene alguno de los personajes de One Piece', () => {
    return expect(luffy.getFruta()).to.be.equal('Paramecia');
  })
  /*
  it('luffy.getNombre() returns nombre del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getNombre()).to.be.equal('Zenitsu');
  })

  it('luffy.getRespiracion() returns superpoder(respiracion de un elemento) el personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getRespiracion()).to.be.equal('Rayo');
  })

  it('luffy.getEstadisticas() returns estadísticas del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getEstadisticas()).to.be.eql({ ataque: 112, defensa: 75, velocidad: 143, hp: 88});
  })

  it('luffy.getAtaque() returns ataque del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getAtaque()).to.be.eql(112);
  })
  it('luffy.getDefensa() returns defensa del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getDefensa()).to.be.eql(75);
  })
  it('luffy.getVelocidad() returns velocidad del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getVelocidad()).to.be.eql(143);
  })
  it('luffy.getHP() returns HP del personaje de Kimetsu No Yaiba', () => {
    return expect(luffy.getHP()).to.be.eql(88);
  })*/
});