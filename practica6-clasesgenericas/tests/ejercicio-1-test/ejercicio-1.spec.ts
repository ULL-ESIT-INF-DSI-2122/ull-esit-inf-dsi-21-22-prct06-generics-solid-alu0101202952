import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/fighter';

let luchador1 = new Fighter('Flareon', 'Pokemon');

describe('Fighter', () => {
  it('luchador1.getNombre() returns nombre del luchador1', () => {
      return expect(luchador1.getNombre()).to.be.equal('Flareon');
  })
  
});