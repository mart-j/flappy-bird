import { generateBlock } from './generateBlock';

export const jumpUp = (bird: { x: number; y: number }) => {
  const newBird = { ...bird };
  newBird.x -= 1;
  return newBird;
};

export const fallDown = (bird: { x: number; y: number }) => {
  const newBird = { ...bird };
  newBird.x += 1;
  return newBird;
};

export const moveBlocksForward = (block: { x: number; y: number }[]) => {
  const newBlock = [...block];
  // eslint-disable-next-line consistent-return
  newBlock.forEach((blockCell) => {
    // eslint-disable-next-line no-param-reassign
    blockCell.y -= 1;
  });
  return newBlock;
};
