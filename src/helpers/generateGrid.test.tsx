import { getGrid } from './generateGrid';

describe('Generate Grid', () => {
  it('function should generate 144 objects', () => {
    expect(getGrid()).toHaveLength(144);
  });
  it('array elements are objects with keys, x & y ', () => {
    getGrid().forEach((obj) => {
      expect(Object.keys(obj)).toEqual(['x', 'y']);
    });
  });
  it('object values in array are numbers', () => {
    getGrid().forEach((obj) => {
      expect(!Object.values(obj).some(isNaN)).toBeTruthy();
    });
  });
});
