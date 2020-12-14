export const getGrid = () => {
  const grid: { x: number; y: number }[] = [];
  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 12; y++) {
      grid.push({ x, y });
    }
  }
  return grid;
};
