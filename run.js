import { getNeighbors, getCellMessage } from './conwaysfirst.js';

const initGrid = [
  [false, true, false],
  [true, true, true],
  [false, false, false],
];

const initX = 1;
const initY = 1;
const neighbors = getNeighbors(initGrid, initY, initX);
const current = initGrid[initY][initX];

const aliveNeighbors = neighbors.filter((value) => value);

const output = getCellMessage(current, aliveNeighbors);
console.log(output);
