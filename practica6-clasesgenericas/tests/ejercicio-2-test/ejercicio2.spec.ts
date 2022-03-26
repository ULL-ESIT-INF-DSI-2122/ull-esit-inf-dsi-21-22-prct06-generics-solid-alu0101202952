import 'mocha';
import {expect} from 'chai';
import {Series} from '../../src/ejercicio-1/series';

let serie1 = new Series('Juego de Tronos', 'George R. R. Martin', ['Aventura', 'Drama', 'Fantasía', 'Medieval'], 1996);
let serie2 = new Series('Vikingos', 'Michael Hirst', ['Histórico', 'Drama', 'Fantasía', 'Acción'], 2013);
let serie3 = new Series('Fugitiva', 'Joaquín Oristrell', ['Thriller'], 2018);

describe('Series', () => {
    it('serie1.getNombre() returns nombre de la serie', () => {
      return expect(serie1.getNombre()).to.be.equal('Juego de Tronos');
    })
})