export const GRID: { x: number; y: number }[] = [];
const getGrid = () => {
  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 12; y++) {
      GRID.push({ x, y });
    }
  }
};
getGrid();
