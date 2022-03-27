import 'mocha';
import {expect} from 'chai';
import {Mensaje} from '../../src/ejercicio-3/mensaje';


let mensaje1 = new Mensaje('HOLAESTOESUNAPRUEBA');

describe('Mensaje', () => {
  it('mensaje1.getMensaje() returns mensaje a encriptar', () => {
    return expect(mensaje1.getMensaje()).to.be.equal('HOLAESTOESUNAPRUEBA');
})
