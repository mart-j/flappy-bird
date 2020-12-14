import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Grid from './components/grid/Grid';
import { getGrid } from './helpers/generateGrid';
import { jumpUp, fallDown, moveBlocksForward } from './helpers/movement';

const App = () => {
  const [bird, setBird] = useState({ x: 4, y: 4 });
  const [toggle, setToggle] = useState(false);
  const [toggleBlock, setToggleBlock] = useState(false);
  const [block, setBlock] = useState([
    { x: 0, y: 6 },
    { x: 1, y: 6 },
    { x: 2, y: 6 },
    { x: 9, y: 6 },
    { x: 10, y: 6 },
    { x: 11, y: 6 },
  ]);

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
  }, [toggleBlock]);

  useEffect(() => {
    if (_.some(block, bird)) {
      alert();
    }
  }, [toggleBlock, toggle]);

  return (
    <div onClick={() => setBird(jumpUp(bird))} className="container">
      <Grid block={block} bird={bird} grid={getGrid()} />
    </div>
  );
};
export default App;
