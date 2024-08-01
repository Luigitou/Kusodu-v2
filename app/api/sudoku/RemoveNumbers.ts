export function removeCells(
    grid: number[][],
    numberOfCellsToRemove: number
): number[][] {
    let removedCells = 0;

    while (removedCells < numberOfCellsToRemove) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        // Si la case est déjà vide, passer à une autre case
        if (grid[row][col] === 0) {
            continue;
        }

        const backup = grid[row][col];
        grid[row][col] = 0;

        let gridCopy = grid.map((row) => row.slice());

        if (!hasUniqueSolution(gridCopy)) {
            grid[row][col] = backup;
        } else {
            removedCells++;
        }
    }

    return grid;
}

function hasUniqueSolution(grid: number[][]): boolean {
    let solutions = 0;

    function countSolutions(
        grid: number[][],
        row: number,
        col: number
    ): boolean {
        if (row === 9 - 1 && col === 9) {
            solutions++;
            return solutions > 1;
        }

        if (col === 9) {
            row++;
            col = 0;
        }

        if (grid[row][col] !== 0) {
            return countSolutions(grid, row, col + 1);
        }

        for (let num = 1; num <= 9; num++) {
            if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;

                if (countSolutions(grid, row, col + 1)) {
                    return true;
                }

                grid[row][col] = 0;
            }
        }

        return false;
    }

    countSolutions(grid, 0, 0);
    return solutions === 1;
}

function isSafe(
    grid: number[][],
    row: number,
    col: number,
    num: number
): boolean {
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) {
            return false;
        }
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}
