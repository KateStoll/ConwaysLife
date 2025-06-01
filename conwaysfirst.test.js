import {
  getNeighbors,
  getCellMessage,
  checkSquare,
  getNextGeneration,
} from "./conwaysfirst";

describe("getNeighbors", () => {
  test("gets all neighbors of center cell", () => {
    const initGrid = [
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ];

    const initX = 1;
    const initY = 1;
    const neighbors = getNeighbors(initGrid, initY, initX);
    expect(neighbors).toStrictEqual([
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      false,
    ]);
  });
  test("gets all neighbors of center left cell", () => {
    const initGrid = [
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ];

    const initX = 0;
    const initY = 1;
    const neighbors = getNeighbors(initGrid, initY, initX);
    expect(neighbors).toStrictEqual([false, true, true, false, false]);
  });
});

describe("getCellMessage", () => {
  test("Living cell survives with 2 or 3 neighbors", () => {
    const current = true;
    const aliveNeighbors = [true, true, true];
    expect(getCellMessage(current, aliveNeighbors)).toBe("survived!");
  });

  test("died of overpopulation", () => {
    const current = true;
    const aliveNeighbors = [true, true, true, true];
    expect(getCellMessage(current, aliveNeighbors)).toBe(
      "died of overpopulation"
    );
  });

  test("Dead cell comes to life with exactly 3 neighbors", () => {
    const current = false;
    const aliveNeighbors = [true, true, true];
    expect(getCellMessage(current, aliveNeighbors)).toBe("Bring to Life");
  });

  test("Living cell dies with fewer than 2 neighbors (loneliness)", () => {
    const current = true;
    const aliveNeighbors = [true];
    expect(getCellMessage(current, aliveNeighbors)).toBe("died of lonliness");
  });

  test("Dead cell stays dead unless it has exactly 3 neighbors", () => {
    const current = false;
    const aliveNeighbors = [true, true]; // Only 2 alive neighbors
    expect(getCellMessage(current, aliveNeighbors)).toBe("Stays Dead");
  });
});

describe("checkSquare", () => {
  const grid = [
    [false, true, false],
    [true, true, true],
    [false, false, false],
  ];

  const initX = 1;
  const initY = 1;

  test("Outputs 'survived!' if Living cell survives with 2 or 3 neighbors", () => {
    expect(checkSquare(grid, initY, initX)).toBe("survived!");
  });
});

describe("getNextGeneration", () => {
  test("Smoke test: runs without throwing an error", () => {
    const initGrid = [
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ];

    expect(() => getNextGeneration(initGrid)).not.toThrow();
  });
});
