/**
 * For a space that is populated:
Each cell with one or no neighbors dies, as if by solitude.

Each cell with four or more neighbors dies, as if by overpopulation.

Each cell with two or three neighbors survives.

For a space that is empty or unpopulated:
Each cell with three alive neighbors becomes bring to life.

 *
 */

/* i need to fix the getNeighbors fucntion */

export function getNeighbors(grid, currentY, currentX) {
  const neighbors = [];

  for (let y = currentY - 1; y <= currentY + 1; y++) {
    for (let x = currentX - 1; x <= currentX + 1; x++) {
      if (y === currentY && x === currentX) continue;
      if (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length) {
        neighbors.push(grid[y][x]);
      }
    }
  }

  return neighbors;
}

export function getCellMessage(currentIsAlive, aliveNeighbors) {
  if (
    currentIsAlive &&
    (aliveNeighbors.length === 2 || aliveNeighbors.length === 3)
  ) {
    return "survived!";
  } else if (!currentIsAlive && aliveNeighbors.length === 3) {
    return "Bring to Life";
  } else if (
    currentIsAlive &&
    (aliveNeighbors.length === 0 || aliveNeighbors.length === 1)
  ) {
    return "died of lonliness";
  } else if (currentIsAlive && aliveNeighbors.length > 3) {
    return "died of overpopulation";
  } else if (!currentIsAlive && aliveNeighbors.length < 3) {
    return "Stays Dead";
  } else {
    return "Oops";
  }
}

export function checkSquare(grid, initY, initX) {
  const neighbors = getNeighbors(grid, initY, initX);
  const current = grid[initY][initX];

  const aliveNeighbors = neighbors.filter((value) => value);

  const output = getCellMessage(current, aliveNeighbors);
  return output;
}
