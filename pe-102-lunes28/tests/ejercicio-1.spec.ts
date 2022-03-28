import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/primenumber';

let primenumber = PrimeNumber.getPrimeInstance();

describe('Prime Number', () => {
  it('primenumber.getPrimeInstance() returns la instancia', () => {
    return expect(primenumber).to.be.equal(primenumber);
  })
  it('primenumber.getPrimeNumber() returns los números primos', () => {
    return expect(primenumber.getPrimeNumber()).to.be.eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
  })
  it('primenumber.getPrimeLenght() returns tamaño del array de primos', () => {
    return expect(primenumber.getPrimeLenght()).to.be.equal(10);
  })
  it('primenumber.setPrimeNumber() añade un número primo', () => {
    return expect(primenumber.setPrimeNumber([2,3])).to.be.equal(undefined);
  })
  it('primenumber.getNPrimeNumber() devuelva los n primeros números primos', () => {
    return expect(primenumber.getNPrimeNumber(2)).to.be.equal(5);
  })
  it('primenumber.getNToMPrime() devuelva los n a m números primos dentro de ese rango', () => {
    return expect(primenumber.getNToMPrime(2,4)).to.be.equal(undefined);
  })
});
