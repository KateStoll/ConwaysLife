import { getNeighbors, getCellMessage } from "./conwaysfirst.js";

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

///////

const iter2X = 1;
const iter2Y = 2;
const iter2neighbors = getNeighbors(initGrid, iter2Y, iter2X);
const iter2square = initGrid[iter2Y][iter2X];

const iter2aliveNeighbors = iter2neighbors.filter((value) => value);

const iteroutput = getCellMessage(iter2square, iter2aliveNeighbors);
console.log(iteroutput);

/////

const iter3X = 0;
const iter3Y = 2;
const iter3neighbors = getNeighbors(initGrid, iter3Y, iter3X);
const iter3square = initGrid[iter3Y][iter3X];

const iter3aliveNeighbors = iter3neighbors.filter((value) => value);

const iteroutput3 = getCellMessage(iter3square, iter3aliveNeighbors);
console.log(iteroutput3);
