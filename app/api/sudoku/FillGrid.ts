function shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isSafe(
    grid: number[][],
    row: number,
    col: number,
    num: number
): boolean {
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) {
            return false;
        }
    }

    for (let x = 0; x < 9; x++) {
        if (grid[x][col] === num) {
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

function solveSudoku(grid: number[][], row: number, col: number): boolean {
    if (row === 9 - 1 && col === 9) {
        return true;
    }

    if (col === 9) {
        row++;
        col = 0;
    }

    if (grid[row][col] !== 0) {
        return solveSudoku(grid, row, col + 1);
    }

    // @ts-ignore
    const numbers = shuffleArray([...Array(9).keys()].map((n) => n + 1));

    for (let num of numbers) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;

            if (solveSudoku(grid, row, col + 1)) {
                return true;
            }

            grid[row][col] = 0; // backtrack
        }
    }

    return false;
}

export function fillGrid(grid: number[][]): number[][] {
    solveSudoku(grid, 0, 0);

    return grid;
}
