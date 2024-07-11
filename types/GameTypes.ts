type Cell = {
    row: number;
    col: number;
    value: number;
};

type GameState = {
    gameBoard: number[][];
    solution: number[][];
    timer: number;
    difficulty: string;
    gameStatus: 'not_started' | 'in_progress' | 'completed';
    errors: number;
    hintsUsed: number;
    selectedCell: Cell | null;
};
