import { fillGrid } from '@/app/api/sudoku/FillGrid';

type gridType = {
    solution: number[][];
    gameBoard: number[][];
    difficulty: number;
};

export function generateSudoku(difficulty: number, size: number) {
    const gameBoard = Array.from({ length: size }, () =>
        new Array(size).fill(0)
    );

    const solution = fillGrid();

    const formattedGrid: gridType = {
        solution,
        gameBoard,
        difficulty,
    };

    console.log(formattedGrid);
    return formattedGrid;
}
