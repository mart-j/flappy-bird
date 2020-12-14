import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Grid from './components/grid/Grid';
import { getGrid } from './helpers/generateGrid';
import { generateBlock } from './helpers/generateBlock';
import { jumpUp, fallDown, moveBlocksForward } from './helpers/movement';
import { randomInterval } from './helpers/randomInterval';

const App = () => {
  const [bird, setBird] = useState({ x: 4, y: 4 });
  const [toggle, setToggle] = useState(false);
  const [toggleBlock, setToggleBlock] = useState(false);
  const [block, setBlock] = useState(generateBlock(12));
  const [blockSecond, setBlockSecond] = useState(generateBlock(6));

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle);
    }, 1000);
    setBird(fallDown(bird));
  }, [toggle]);

  useEffect(() => {
    setTimeout(() => {
      setToggleBlock(!toggleBlock);
    }, 300);
    setBlock(moveBlocksForward(block));
    setBlockSecond(moveBlocksForward(blockSecond));
  }, [toggleBlock]);

  useEffect(() => {
    if (_.some(block, bird) || _.some(blockSecond, bird)) {
      alert();
    }
    if (block[0].y < 0) {
      setBlock(generateBlock(randomInterval()));
    }
    if (blockSecond[0].y < 0) {
      setBlockSecond(generateBlock(randomInterval()));
    }
  }, [toggleBlock, toggle]);

  return (
    <div onClick={() => setBird(jumpUp(bird))} className="container">
      <Grid
        blockSecond={blockSecond}
        block={block}
        bird={bird}
        grid={getGrid()}
      />
    </div>
  );
};
export default App;
