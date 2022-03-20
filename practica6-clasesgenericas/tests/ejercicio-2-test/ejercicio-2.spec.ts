import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../../src/ejercicio-2/tablero';
import {Juego} from '../../src/ejercicio-2/juego';

const JUGADOR_1 = 1

let tablero = new Tablero(6,7);
let juego = new Juego(tablero, 6, 7);

describe('Tablero Conecta 4', () => {
  it('tablero.generarTablero() returns tablero 6*7', () => {
      return expect(tablero.generarTablero()).to.be.eql(undefined);
  })

  it('tablero.getFilas() returns filas', () => {
    return expect(tablero.getFilas()).to.be.equal(-1);
  })

  it('tablero.getColumnas() returns columnas', () => {
    return expect(tablero.getColumnas(1)).to.be.equal(-1);
  })
});

describe('Juego Conecta 4', () => {
  it('juego.columnaLLena() returns se valida si la columna está llena o no', () => {
      return expect(juego.columnaLLena(tablero, 1)).to.be.true;
  })

  it('juego.colocarPieza() returns el tablero con el nuevo movimiento', () => {
    return expect(juego.colocarPieza(tablero, 1, JUGADOR_1)).to.be.false;
  })

  it('juego.ganador() returns comprueba si hay 4 fichas del mismo color', () => {
    return expect(juego.ganador(tablero, 1, JUGADOR_1)).to.be.true;
  })

});
