import { getNeighbors, getCellMessage, checkSquare } from "./conwaysfirst.js";

const initGrid = [
  [false, true, false],
  [true, true, true],
  [false, false, false],
];

console.log(checkSquare(initGrid, 0, 0));

console.log(checkSquare(initGrid, 0, 1));

console.log(checkSquare(initGrid, 0, 2));

console.log(checkSquare(initGrid, 1, 0));

console.log(checkSquare(initGrid, 1, 1));

console.log(checkSquare(initGrid, 1, 2));

console.log(checkSquare(initGrid, 2, 0));

console.log(checkSquare(initGrid, 2, 1));

console.log(checkSquare(initGrid, 2, 2));
