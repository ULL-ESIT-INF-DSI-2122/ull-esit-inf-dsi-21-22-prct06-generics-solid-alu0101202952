import 'mocha';
import {expect} from 'chai';
import {Collectable} from '../../src/ejercicio-1/collectable';

const collection = new Collectable<number>([1, 2, 3]);

describe('Collectable', () => {
  it('collection.addItem() add an item', () => {
      return expect(collection.addItem(4)).to.be.equal(4);
  })
  it('collection.getItem() get an item', () => {
    return expect(collection.getItem(2)).to.be.equal(3);
  })
  it('collection.removeItem() remove an item', () => {
    return expect(collection.removeItem()).to.be.equal(4);
  })
  it('collection.getNumberOfItems() get number of items in array', () => {
    return expect(collection.getNumberOfItems()).to.be.equal(3);
  })
  
});
