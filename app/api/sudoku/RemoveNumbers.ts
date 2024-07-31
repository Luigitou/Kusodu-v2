export function generateGameBoard(grid: number[][], difficulty: number) {
    const size = grid.length;
    const cells = size * size;
    const emptyCells = Math.floor(cells * (difficulty / 100));
    let i = 0;
    while (i < emptyCells) {
        const row = Math.floor(Math.random() * size);
        const col = Math.floor(Math.random() * size);
        if (grid[row][col] !== 0) {
            grid[row][col] = 0;
            i++;
        }
    }
    return grid;
}
