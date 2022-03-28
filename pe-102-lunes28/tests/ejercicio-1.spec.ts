import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/primenumber';

let primenumber = new PrimeNumber.getPrimeInstance();

describe('Prime Number', () => {
  it('primenumber.getPrimeInstance() returns la instancia', () => {
    return expect(primenumber.getPrimeInstance()).to.be.equal(primenumber);
  })
  it('primenumber.getPrimeNumber() returns los números primos', () => {
    return expect(primenumber.getPrimeNumber()).to.be.equal(undefined);
  })
  it('primenumber.getPrimeLenght() returns tamaño del array de primos', () => {
    return expect(primenumber.getPrimeLenght()).to.be.equal(undefined);
  })
  it('primenumber.setPrimeNumber() añade un número primo', () => {
    return expect(primenumber.getPrimeNumber(2)).to.be.equal(undefined);
  })
  it('primenumber.getNPrimeNumber() devuelva los n primeros números primos', () => {
    return expect(primenumber.getNPrimeNumber(2)).to.be.equal(undefined);
  })
  it('primenumber.getNToMPrime() devuelva los n a m números primos dentro de ese rango', () => {
    return expect(primenumber.getNToMPrime(2,4)).to.be.equal(undefined);
  })
});
