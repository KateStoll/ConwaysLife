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
  const aliveCount = aliveNeighbors.length;

  if (currentIsAlive && (aliveCount === 2 || aliveCount === 3)) {
    return "survived!";
  }

  if (!currentIsAlive && aliveCount === 3) {
    return "Bring to Life";
  }

  if (currentIsAlive && (aliveCount === 0 || aliveCount === 1)) {
    return "died of lonliness";
  }

  if (currentIsAlive && aliveCount > 3) {
    return "died of overpopulation";
  }

  if (!currentIsAlive && aliveCount < 3) {
    return "Stays Dead";
  }

  return "Oops";
}

export function checkSquare(grid, initY, initX) {
  const neighbors = getNeighbors(grid, initY, initX);
  const current = grid[initY][initX];

  const aliveNeighbors = neighbors.filter((value) => value);

  const output = getCellMessage(current, aliveNeighbors);
  return output;
}

export function checkAllSquares(initGrid) {
  const response = [];

  for (let y = 0; y < initGrid.length; y++) {
    for (let x = 0; x < initGrid[0].length; x++) {
      const result = checkSquare(initGrid, y, x);
      response.push(result);
    }
  }

  return response;
}

export function getNextGeneration(currentGrid) {
  const updatedGrid = [];


  for (let row = 0; row < currentGrid.length; row++) {
    const newRow = [];
    for (let col = 0; col < currentGrid[0].length; col++) {
      const isCurrentlyAlive = currentGrid[row][col];
      const neighbors = getNeighbors(currentGrid, row, col);
      const aliveCount = countAliveNeighbors(neighbors); // <-- clear and readable

      let willBeAlive = false;
      if (isCurrentlyAlive) {
        if (aliveCount === 2 || aliveCount === 3) {
          willBeAlive = true;
        }
      } else {
        if (aliveCount === 3) {
          willBeAlive = true;
        }
      }

      newRow.push(willBeAlive);
    }
    updatedGrid.push(newRow);
  }
  return updatedGrid;
}

export function countAliveNeighbors(neighbors) {
  let count = 0;
  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i]) {
      count++;
    }
  }
  return count;
  // replaced the for loop in the getNextGeneration with a function for testability

}
