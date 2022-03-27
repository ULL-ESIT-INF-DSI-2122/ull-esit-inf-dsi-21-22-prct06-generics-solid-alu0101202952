import 'mocha';
import {expect} from 'chai';
import {Mensaje} from '../../src/ejercicio-3/mensaje';
import {Clave} from '../../src/ejercicio-3/clave';
import {CifradoCesar} from '../../src/ejercicio-3/cifradocesar';


let mensaje1 = new Mensaje('HOLAESTOESUNAPRUEBA');
let clave = new Clave('CLAVE');
let cifradocesar1 = new CifradoCesar(mensaje1, clave);

describe('Mensaje', () => {
  it('mensaje1.getMensaje() returns mensaje a encriptar', () => {
    return expect(mensaje1.getMensaje()).to.be.equal('HOLAESTOESUNAPRUEBA');
  })
  it('mensaje1.getNumeroCaracteres() returns tamaño del mensaje', () => {
    return expect(mensaje1.getNumeroCaracteres()).to.be.equal(19);
  })
})

describe('Clave', () => {
  it('clave.getClave() returns clave a encriptar', () => {
    return expect(clave.getClave()).to.be.equal('CLAVE');
  })
  it('clave.getNumeroCaracteres() returns tamaño de la clave', () => {
    return expect(clave.getNumeroCaracteres()).to.be.equal(5);
  })
})

describe('Cifrado César', () => {
  it('cifradocesar1.getCifrado() returns mensaje a encriptar', () => {
    return expect(cifradocesar1.getMensaje()).to.be.equal(Object (mensaje1));
  })
  it('cifradocesar1.getClave() returns clave con la que encriptar', () => {
    return expect(cifradocesar1.getClave()).to.be.equal(clave);
  })
  it('cifradocesar1.cifrar() returns mensaje encriptado', () => {
    return expect(cifradocesar1.cifrar(mensaje1, clave)).to.be.equal(undefined);
  })
})
