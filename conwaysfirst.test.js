import { getCellMessage } from './conwaysfirst';

test('Living cell survives with 2 or 3 neighbors', () => {
  const current = true;
  const aliveNeighbors = [true, true, true];
  expect(getCellMessage(current, aliveNeighbors)).toBe('survived!');
});

test('died of overpopulation', () => {
  const current = true;
  const aliveNeighbors = [true, true, true, true];
  expect(getCellMessage(current, aliveNeighbors)).toBe(
    'died of overpopulation'
  );
});

test('Dead cell comes to life with exactly 3 neighbors', () => {
  const current = false;
  const aliveNeighbors = [true, true, true];
  expect(getCellMessage(current, aliveNeighbors)).toBe('Bring to Life');
});

test('Living cell dies with fewer than 2 neighbors (loneliness)', () => {
  const current = true;
  const aliveNeighbors = [true];
  expect(getCellMessage(current, aliveNeighbors)).toBe('died of lonliness');
});

test('Dead cell stays dead unless it has exactly 3 neighbors', () => {
  const current = false;
  const aliveNeighbors = [true, true]; // Only 2 alive neighbors
  expect(getCellMessage(current, aliveNeighbors)).toBe('Oops');
});

/*
test("Dead cell comes to life with exactly 3 neighbors", () => {

});

test("Living cell dies with fewer than 2 neighbors (loneliness)", () => {

});

test("Living cell dies with more than 3 neighbors (overpopulation)", () => {

});

test("Dead cell stays dead unless it has exactly 3 neighbors", () => {

}); */
