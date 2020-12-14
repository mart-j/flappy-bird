import { generateBlock } from './generateBlock';

describe('Generate Block', () => {
  it('object keys are x and y', () => {
    generateBlock(5).forEach((obj) => {
      expect(Object.keys(obj)).toEqual(['x', 'y']);
    });
  });
  it('block positions is always same', () => {
    generateBlock(5).forEach((obj) => {
      expect(obj.y).toEqual(5);
    });
  });
});
