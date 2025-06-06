import {
  getNeighbors,
  getCellMessage,
  checkSquare,
  checkAllSquares,
  getNextGeneration,
} from "./conwaysfirst.js";

const initGrid = [
  [false, true, false],
  [true, true, true],
  [false, false, false],
];

const result = checkAllSquares(initGrid);
console.log(result);

getNextGeneration(currentGrid);
