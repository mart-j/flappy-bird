import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';
import bird from '../../assets/bird.png';

interface Props {
  grid: { x: number; y: number }[];
  character: { x: number; y: number };
  tick: { x: number; y: number };
  block: { x: number; y: number }[];
  topBlock: { x: number; y: number }[];
  fallDown: () => void;
  moveForwardBlock: () => void;
  animationLoop: () => void;
}

const Grid: FC<Props> = ({
  animationLoop,
  moveForwardBlock,
  fallDown,
  character,
  grid,
  block,
  tick,
  topBlock,
}) => {
  const checkWhitchAnimationEnded = (animation: string) => {
    if (animation.includes('character')) {
      fallDown();
    }
    if (animation.includes('tick')) {
      animationLoop();
      moveForwardBlock();
    }
  };
  return (
    <div className={styles.canvas}>
      {grid.map((square, i) => {
        return (
          <div
            onAnimationEnd={(e) => {
              checkWhitchAnimationEnded(e.animationName);
            }}
            className={classNames(
              styles.square,
              JSON.stringify(square) === JSON.stringify(character) &&
                styles.character,
              JSON.stringify(block).includes(JSON.stringify(square)) &&
                styles.block,
              JSON.stringify(topBlock).includes(JSON.stringify(square)) &&
                styles.block,
              JSON.stringify(square) === JSON.stringify(tick) && styles.tick,
              JSON.stringify(block[0]).includes(JSON.stringify(square)) &&
                styles.hazard,
            )}
            key={`${i}`}
          >
            {JSON.stringify(square) === JSON.stringify(character) && (
              <img src={bird} alt="bird" width="60" />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Grid;
