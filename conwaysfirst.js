
const grid = [
    [true, false,false],
    [false,false,false],
    [false,false,false]
];

const result = [];

function getNeighbors(x,y) {
    const neighbors = [];

    for (let j = 0; j < 3; j++) {
        for(let i = 0; i < 3; i++){
    
            if(i===x && j===y){
    
            } else if(x===1 && y ===0){
                
            }
    
            result.push(grid[y][x]);
        }
    }
    
}

const trueValues = neighbors.filter(Boolean).length;
console.log(trueValues);

/* .filter(Boolean) creates a new array with only the true values
   .length gives a number of the trues in the new array
*/

console.log(result);
