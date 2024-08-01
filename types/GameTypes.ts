export type Cell = {
    row: number;
    col: number;
    value: number;
};

export type GameState = {
    gameBoard: number[][];
    solution: number[][];
    timer: number;
    difficulty: string;
    gameStatus: 'not_started' | 'in_progress' | 'completed';
    errors: number;
    hintsUsed: number;
    selectedCell: Cell | null;
};

export type gridType = {
    solution: number[][];
    gameBoard: number[][];
    difficulty: number;
};

export type difficulty = {
    id: number;
    label: string;
    cellsToRemove: number;
};
