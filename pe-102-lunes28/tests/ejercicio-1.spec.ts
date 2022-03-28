import 'mocha';
import {expect} from 'chai';
import {PrimerNumber} from '../src/primenumber';

let primenumber = new PrimerNumber([130, 60, 65, 65]);

describe('Prime Number, com', () => {
  it('primenumber.getPrimeNumber() returns los números primos', () => {
    return expect(primenumber.getPrimeNumber()).to.be.equal(undefined);
  })
});
