import 'mocha';
import {expect} from 'chai';
import {Collectable} from '../../src/ejercicio-1/collectable';

const collection = new Collectable<number>([1, 2, 3]);

describe('Collectable', () => {
  it('collection.addItem() add an item', () => {
      return expect(collection.addItem(4)).to.be.equal(undefined);
  })
  it('collection.getItem() get an item', () => {
    return expect(collection.getItem(2)).to.be.equal(3);
  })
  
});
