import React, { FC } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import styles from './Grid.module.scss';

interface Props {
  grid: { x: number; y: number }[];
  block: { x: number; y: number }[];
  bird: { x: number; y: number };
}

const Grid: FC<Props> = ({ block, grid, bird }) => {
  return (
    <div className={styles.canvas}>
      {grid.map((cell, i) => {
        return (
          <div
            key={`${i}`}
            className={classNames({
              [styles.cell]: true,
              [styles.bird]: _.isEqual(cell, bird),
              [styles.block]: _.some(block, cell),
            })}
          ></div>
        );
      })}
    </div>
  );
};
export default Grid;
