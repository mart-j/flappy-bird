import { jumpUp, fallDown, moveBlocksForward } from './movement';

describe('Jump', () => {
  it('should jump one cell up', () => {
    expect(jumpUp({ x: 10, y: 11 })).toEqual({ x: 9, y: 11 });
  });
});

describe('Fall Down', () => {
  it('should fall one cell down', () => {
    expect(fallDown({ x: 10, y: 11 })).toEqual({ x: 11, y: 11 });
  });
});

describe('block movement', () => {
  it('block moves one cell left', () => {
    expect(moveBlocksForward([{ x: 11, y: 11 }])).toEqual([{ x: 11, y: 10 }]);
  });
});
