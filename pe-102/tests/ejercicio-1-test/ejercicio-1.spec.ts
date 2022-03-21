import 'mocha';
import {expect} from 'chai';
import {CollectableClass} from '../../src/ejercicio-1/collectable';
import {PrintableClass} from '../../src/ejercicio-1/printable';
import {PrintableCollection} from '../../src/ejercicio-1/printablecollection';

const collection = new CollectableClass<number>([1, 2, 3]);
const printable = new PrintableClass<number>([1, 2, 4]);
const printable2 = new PrintableClass<number>([4, 5, 6]);

//const printablecollection1 = new PrintableCollection<CollectableClass>([collection]);

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


describe('Printable', () => {
  it('printable.print() print an item', () => {
      return expect(printable.print()).to.be.equal(undefined);
  })
  
});
/*
describe('PrintableCollection', () => {
  it('printablecollection1.addItem() addItem the collection', () => {
      return expect(printablecollection1.addItem(7)).to.be.equal(undefined);
  })
  
});*/
