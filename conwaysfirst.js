/**
 * For a space that is populated:
Each cell with one or no neighbors dies, as if by solitude.


Each cell with four or more neighbors dies, as if by overpopulation.


Each cell with two or three neighbors survives.


For a space that is empty or unpopulated:
Each cell with three neighbors becomes bring to life.

 * 
 */
const grid = [
    [true, false,false],
    [false,false,false],
    [false,false,false]
];

const current = grid[0][0];
const neighbors = [];

for (let y = 0; y < 3; y++) {
    for(let x = 0; x < 3; x++){
       if(x === 0 && y === 1 ) {
        neighbors.push(grid[y][x]);
       } else if(x === 1 && y === 0) {
        neighbors.push(grid[y][x]);
       } else if ( x === 1 && y === 1) {
        neighbors.push(grid[y][x]);

       }
       
        
    }
}

const aliveNeighbors = neighbors.filter(value => value);
    


console.log(aliveNeighbors.length);


if(aliveNeighbors.length === 2 || aliveNeighbors.lenght === 3) {
    console.log("survived!");
} else if (!current && aliveNeighbors.length === 3){
    console.log("Bring to Life");
} else if(current && (aliveNeighbors.length === 0 || aliveNeighbors.length === 1)){
    console.log("died of lonliness");
} else {
    console.log("Oops");
}