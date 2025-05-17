import { getNeighbors, getCellMessage, checkSquare } from "./conwaysfirst.js";

const initGrid = [
  [false, true, false],
  [true, true, true],
  [false, false, false],
];

checkSquare(initGrid, 0, 0);

checkSquare(initGrid, 0, 1);

checkSquare(initGrid, 0, 2);

checkSquare(initGrid, 1, 0);

checkSquare(initGrid, 1, 1);

checkSquare(initGrid, 1, 2);

checkSquare(initGrid, 2, 0); //

checkSquare(initGrid, 2, 1);

checkSquare(initGrid, 2, 2); //
