import 'mocha';
import {expect} from 'chai';
import {Series} from '../../src/ejercicio-2/series';
import {Peliculas} from '../../src/ejercicio-2/peliculas';
import {Documentales} from '../../src/ejercicio-2/documentales';

let serie1 = new Series('Juego de Tronos', 'George R. R. Martin', ['Aventura', 'Drama', 'Fantasía', 'Medieval'], 1996);
let serie2 = new Series('Vikingos', 'Michael Hirst', ['Histórico', 'Drama', 'Fantasía', 'Acción'], 2013);
let serie3 = new Series('Fugitiva', 'Joaquín Oristrell', ['Thriller'], 2018);

let pelicula1 = new Peliculas('Titanic', 'James Cameron', ['Kate Winslet', 'Leonardo DiCaprio'], ['Romance', 'Drama', 'Histórico'], 1997);
let pelicula2 = new Peliculas('La fuerza del cariño', 'James L. Brooks', ['Shirley MacLaine', 'Debra Winger', 'Jack Nicholson'], ['Drama', 'Comedia'], 1983);
let pelicula3 = new Peliculas('Asesinato en el Orient Express', 'Kenneth Branagh', ['Kenneth Branagh'], ['Policiaca', 'Misterio'], 2017);

let documental1 = new Documentales('Los zorros', 'National Geographic España', ['Naturaleza'], 2017);
let documental2 = new Documentales('Viaje al centro de la tele', 'Pedro Santos Movellán', ['Música', 2013]);

describe('Series', () => {
  it('serie1.getNombre() returns nombre de la serie', () => {
    return expect(serie1.getNombre()).to.be.equal('Juego de Tronos');
  })
  it('serie1.getAutor() returns nombre del autor de la serie', () => {
    return expect(serie1.getAutor()).to.be.equal('George R. R. Martin');
  })
  it('serie1.getGenero() returns género/s de la serie', () => {
    return expect(serie1.getGenero()).to.be.eql(['Aventura', 'Drama', 'Fantasía', 'Medieval']);
  })
  it('serie1.getAnio() returns año de la serie', () => {
    return expect(serie1.getAnio()).to.be.equal(1996);
  })
})

describe('Películas', () => {
  it('pelicula2.getNombre() returns nombre de la pelicula', () => {
    return expect(pelicula2.getNombre()).to.be.equal('La fuerza del cariño');
  })
  it('pelicula2.getDirector() returns nombre del director de la pelicula', () => {
    return expect(pelicula2.getDirector()).to.be.equal('James L. Brooks');
  })
  it('pelicula2.getActores() returns actore/s actrices de la pelicula', () => {
    return expect(pelicula2.getActores()).to.be.eql(['Shirley MacLaine', 'Debra Winger', 'Jack Nicholson']);
  })
  it('pelicula2.getGenero() returns género/s de la pelicula', () => {
    return expect(pelicula2.getGenero()).to.be.eql(['Drama', 'Comedia']);
  })
  it('pelicula2.getAnio() returns año de la pelicula', () => {
    return expect(pelicula2.getAnio()).to.be.equal(1983);
  })
})

describe('Documentales', () => {
  it('documental1.getNombre() returns nombre del documental', () => {
    return expect(documental1.getNombre()).to.be.equal('Los zorros');
  })
  it('documental1.getDirector() returns nombre del director del documental', () => {
    return expect(documental1.getDirector()).to.be.equal('National Geographic España');
  })
  it('documental1.getGenero() returns género/s del documental', () => {
    return expect(documental1.getGenero()).to.be.eql(['Naturaleza']);
  })
  it('documental1.getAnio() returns año del documental', () => {
    return expect(documental1.getAnio()).to.be.equal(2017);
  })
})