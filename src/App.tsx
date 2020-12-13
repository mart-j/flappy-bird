/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import Grid from './components/grid/Grid';
import { GRID } from './helpers/generateGrid';

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [tick, setTick] = useState({ x: 0, y: 0 });
  const [grid, setGrid] = useState(GRID);
  const [character, setCharacter] = useState({ x: 6, y: 2 });
  const [block, setBlock] = useState([
    { x: 7, y: 10 },
    { x: 8, y: 10 },
    { x: 9, y: 10 },
    { x: 10, y: 10 },
    { x: 11, y: 10 },
  ]);
  const [topBlock, setTopBlock] = useState([
    { x: 0, y: 10 },
    { x: 1, y: 10 },
    { x: 2, y: 10 },
    { x: 3, y: 10 },
  ]);

  useEffect(() => {
    // need to add crash detection for top pipe
    const charDetect = { ...character };
    const charDetectTop = { ...character };
    charDetectTop.x += 1;
    charDetect.y += 1;
    if (
      JSON.stringify(block).includes(JSON.stringify(charDetect)) ||
      JSON.stringify(block).includes(JSON.stringify(charDetectTop))
    ) {
      setIsGameRunning(false);
    }
  }, [tick]);
  useEffect(() => {
    const newBlock = [...block];
    if (block[0].y < 0) {
      newBlock.forEach((square) => {
        square.y = 12; // can be added random number higher than  12
        setBlock(newBlock);
      });
      const newTopBlock = [...topBlock];
      if (topBlock[0].y < 0) {
        newTopBlock.forEach((square) => {
          square.y = 12; // can be added random number higher than  12
          setTopBlock(newTopBlock);
        });
      }
    }
  }, [block]);

  const fallDown = () => {
    const newCharcter = { ...character };
    newCharcter.x += 1;
    setCharacter(newCharcter);
  };

  const jumpUp = () => {
    const newCharcter = { ...character };
    newCharcter.x -= 1;
    setCharacter(newCharcter);
  };

  const moveForwardBlock = () => {
    const newBlock = [...block];
    newBlock.forEach((square) => {
      square.y -= 1;
    });
    setBlock(newBlock);
    const newTopBlock = [...topBlock];
    newTopBlock.forEach((square) => {
      square.y -= 1;
    });
    setTopBlock(newTopBlock);
  };

  const animationLoop = () => {
    const newTime = { ...tick };
    newTime.x += 1;
    if (newTime.x > 1) {
      newTime.x = 0;
    }
    setTick(newTime);
  };

  return (
    <div onClick={jumpUp} className="container">
      {isGameRunning ? (
        <Grid
          topBlock={topBlock}
          tick={tick}
          animationLoop={animationLoop}
          moveForwardBlock={moveForwardBlock}
          fallDown={fallDown}
          block={block}
          character={character}
          grid={grid}
        />
      ) : (
        <button onClick={() => setIsGameRunning(true)}>Start game</button>
      )}
    </div>
  );
};
export default App;
