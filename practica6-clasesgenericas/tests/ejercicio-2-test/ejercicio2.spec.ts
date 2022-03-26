import 'mocha';
import {expect} from 'chai';
import {Series} from '../../src/ejercicio-1/series';

let serie1 = new Series('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);

describe('Series', () => {
    it('serie1.getNombre() returns nombre del pokemon', () => {
      return expect(serie1.getNombre()).to.be.equal('Flareon');
    })
})