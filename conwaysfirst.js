
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

export function checkAllSquares(initGrid) {
  const Response = [];

  for (let y = 0; y < initGrid.length; y++) {
    for (let x = 0; x < initGrid[0].length; x++) {
      const result = checkSquare(initGrid, y, x);
      Response.push(result);
    }

  }

  return Response;
}

export function getNextGeneration(currentGrid) {
  const updatedGrid = [];

  // Loop through each row
  for (let y = 0; y < currentGrid.length; y++) {
    const newRow = [];

    // Loop through each column in the current row
    for (let x = 0; x < currentGrid[0].length; x++) {
      const isCurrentlyAlive = currentGrid[y][x];

      // Get all neighboring cells
      const neighbors = getNeighbors(currentGrid, y, x);

      // Count how many neighbors are alive using a nested loop
      let aliveCount = 0;
      for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          aliveCount += 1;
        }
      }

      let willBeAlive = false;

      // Apply the Game of Life rules using nested conditionals
      if (isCurrentlyAlive) {
        if (aliveCount === 2 || aliveCount === 3) {
          willBeAlive = true; // stays alive
        }
      } else {
        if (aliveCount === 3) {
          willBeAlive = true; // comes to life
        }
      }

      newRow.push(willBeAlive);
    }

    updatedGrid.push(newRow);
  }

  return updatedGrid;
}

export function checkSquare(grid, initY, initX) {
  const neighbors = getNeighbors(grid, initY, initX);
  const current = grid[initY][initX];

  const aliveNeighbors = neighbors.filter((value) => value);

  const output = getCellMessage(current, aliveNeighbors);
  return output;
}
