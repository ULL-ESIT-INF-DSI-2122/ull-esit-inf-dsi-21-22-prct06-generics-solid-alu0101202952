import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/primenumber';

let primenumber = new PrimeNumber.getPrimeInstance();

describe('Prime Number, com', () => {
  it('primenumber.getPrimeInstance() returns la instancia', () => {
    return expect(primenumber.getPrimeInstance()).to.be.equal(primenumber);
  })
  it('primenumber.getPrimeNumber() returns los números primos', () => {
    return expect(primenumber.getPrimeNumber()).to.be.equal(undefined);
  })
  it('primenumber.setPrimeNumber() añade un número primo', () => {
    return expect(primenumber.getPrimeNumber(2)).to.be.equal(undefined);
  })
});
