import { fillGrid } from '@/app/api/sudoku/FillGrid';
import { removeCells } from '@/app/api/sudoku/RemoveNumbers';

type gridType = {
    solution: number[][];
    gameBoard: number[][];
    difficulty: number;
};

export function generateSudoku(difficulty: number, size: number) {
    const blank = Array.from({ length: size }, () => new Array(size).fill(0));

    const gameBoard = fillGrid(blank);

    const solution = deepCopyGrid(gameBoard);

    removeCells(gameBoard, difficulty);

    const formattedGrid: gridType = {
        solution,
        gameBoard,
        difficulty,
    };

    return formattedGrid;
}

function deepCopyGrid(grid: number[][]): number[][] {
    return grid.map((row) => [...row]);
}
