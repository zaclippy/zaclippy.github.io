const o = null; // empty square

// 9x9 empty sudoku grid
const puzzle0 = [
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
]

// ------- GRID CHECKING ALGORITHM -------

// check the rows don't have any repeated numbers / blanks
function checkRows(grid) {
    for (let yV = 0; yV < 9; yV++) {
        let currentRow = [];
        for (let xV = 0; xV < 9; xV++) {
            if (grid[yV][xV] == null || currentRow.includes(grid[yV][xV])) {
                return false;
            }
            currentRow.push(grid[yV][xV]);
        }
    }
    return true;
}

// check the columns
function checkColumns(grid) {
    for (let xV = 0; xV < 9; xV++) {
        let currentColumn = [];
        for (let yV = 0; yV < 9; yV++) {
            if (grid[yV][xV] == null || currentColumn.includes(grid[yV][xV])) {
                return false;
            }
            currentColumn.push(grid[yV][xV]);
        }
    }
    return true;
}

// go through the 3x3 blocks
function checkBigBlocks(grid) {
    for (let yb = 0; yb < 9; yb += 3) {
        for (let xb = 0; xb < 9; xb += 3) {
            let currentBlock = [];
            for (let ys = 0; ys < 3; ys++) {
                for (let xs = 0; xs < 3; xs++) {
                    if (currentBlock.includes(grid[yb + ys][xb + xs]) || grid[yb + ys][xb + xs] == null) {
                        return false;
                    }
                    currentBlock.push(grid[yb + ys][xb + xs]);
                }
            }
        }
    }
    return true;
}

// *** idk if return keyword and {} around it is needed here !!
const validGrid = (grid) => checkRows(grid) && checkColumns(grid) && checkBigBlocks(grid)

// ------- PUZZLE SOLVING: ----------

// Filtering function
function validFilter(grids) {
    let validGridsArr = [];
    for (let i = 0; i < grids.length; i++) {
        if (validGrid(grids[i])) {
            validGridsArr.push(grids[i]);
        }
    }
    return validGridsArr;
}

// search to find a solution::
function solSearch(grids) {
    if (grids.length == 0) { // grids.length < 1 ????
        return false;
        // this is if there is no grid which is correct
    } else {
        // backtrack and search for the solution:
        let first = grids.shift();
        // mutual reference: (recursive)
        const trySolve = solve(first); // checking each one, one by one and checking the possibilities from that grid etc. until solved
        if (trySolve == true) {
            return trySolve;
        } else {
            // shift over to the next 'tree' of possible solutions
            return solSearch(grids);
        }
    }
}

function solve(puzzle) {
    // this refers to the function below
    if (doubleCheckAllSquares(puzzle)) {
        return puzzle;
    } else {
        const possiblesolutions = generateNextGrids(puzzle);
        const validGrids = validFilter(possiblesolutions);
        // implement backtrack search
        return solSearch(validGrids);
    }
}

function findEmptySquare(grid) {
    // grid -> [y, x]
    for (let yV = 0; yV < 9; yV++) {
        for (var xV = 0; xV < 9; xV++) {
            if (grid[yV][xV] == null) {
                return [xV, yV]; // flipped so x and y are in normal way
            }
        }
    }
}

// generate the first possibilities that can be generated ... i.e. make a tree of all possible solutions
function generateNextGrids(grid) {
    var treeArr = [];
    const firstEmptySquare = findEmptySquare(grid); // this function returns a y value and an x value (y,x) see above
    if (firstEmptySquare != undefined) {
        const x = firstEmptySquare[0];
        const y = firstEmptySquare[1];
        for (let i = 0; i < 9; i++) {
            // ... operator to create a new grid, not modify the old :
            let newGrid = [...grid];
            let row = [...newGrid[y]]
            row[x] = i;
            newGrid[y] = row;
            treeArr.push(newGrid);
        }
    }
    return treeArr;
}

function doubleCheckAllSquares(grid) {
    // double check to see if every square is filled:
    for (let yV = 0; yV < 9; yV++) {
        for (let xV = 0; xV < 9; xV++) {
            if (grid[yV][xV] == null) {
                return false;
            }
        }
    }
    return true;
}

const testGrid = [
    [8, 1, 2, 7, 5, 3, 6, 4, 9],
    [9, 4, 3, 6, 8, 2, 1, 7, 5],
    [6, 7, 5, 4, 9, 1, 2, 8, 3],
    [1, 5, 4, 2, 3, 7, 8, 9, 6],
    [3, 6, 9, 8, 4, 5, 7, 2, 1],
    [2, 8, 7, 1, 6, 9, 5, 3, 4],
    [5, 2, 1, 9, 7, 4, 3, 6, 8],
    [4, 3, 8, 5, 2, 6, 9, 1, 7],
    [7, 9, 6, 3, 1, 8, 4, 5, 2],
]

const badGrid = [
    [8, 1, 2, 7, 5, 3, 6, 4, 9],
    [9, 4, 3, 6, 8, 2, 1, 7, 5],
    [1, 7, 5, 4, 9, 6, 2, 8, 3],
    [6, 5, 4, 2, 3, 7, 8, 9, 1],
    [3, 6, 9, 8, 4, 5, 7, 2, 6],
    [2, 8, 7, 1, 6, 9, 5, 3, 4],
    [5, 2, 1, 9, 7, 4, 3, 6, 8],
    [4, 3, 8, 5, 2, 1, 9, 1, 7],
    [7, 9, 6, 3, 1, 8, 4, 5, 2],
]

// solvable puzzle
const puzzle1 = [
    [1, o, o, o, o, o, o, o, 3],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, 8, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, 4, o, o],
    [o, o, o, o, o, o, o, o, o],
    [o, 3, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o, 9],
]

// not possible to solve this puzzle
const puzzle2 = [
    [1, 2, 3, 4, 5, 6, 7, 8, o],
    [o, o, o, o, o, o, o, o, 2],
    [o, o, o, o, o, o, o, o, 3],
    [o, o, o, o, o, o, o, o, 4],
    [o, o, o, o, o, o, o, o, 5],
    [o, o, o, o, o, o, o, o, 6],
    [o, o, o, o, o, o, o, o, 7],
    [o, o, o, o, o, o, o, o, 8],
    [o, o, o, o, o, o, o, o, 9],
]

const puzzle3 = [
    [1, 2, 3, 4, 5, 6, 7, 8, o],
    [o, o, o, o, o, o, o, o, 1],
    [o, o, o, o, o, o, o, o, 2],
    [o, o, o, o, o, o, o, o, 3],
    [o, o, o, o, o, o, o, o, 4],
    [o, o, o, o, o, o, o, o, 5],
    [o, o, o, o, o, o, o, o, 6],
    [o, o, o, o, o, o, o, o, 7],
    [o, o, o, o, o, o, o, o, 8],
]