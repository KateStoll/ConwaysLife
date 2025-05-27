import { getNeighbors, getCellMessage, checkSquare } from "./conwaysfirst.js";

const initGrid = [
  [false, true, false],
  [true, true, true],
  [false, false, false],
];

for (let y = 0; y < initGrid.length; y++) {
  for (let x = 0; x < initGrid.length; x++) {
    console.log(checkSquare(initGrid, y, x));
  }
}
