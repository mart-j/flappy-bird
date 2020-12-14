import _ from 'lodash';

export const generateBlock = (distance: number) => {
  const topXHighest = _.random(4, 5);
  const bottomXHighest = _.random(8, 9);
  const block = [];
  for (let i = 0; i < topXHighest; i++) {
    block.push({ x: i, y: distance });
  }
  for (let i = bottomXHighest; i < 12 ; i++) {
    block.push({ x: i, y: distance });
  }

  return block;
};
