import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: GameState = {
    gameBoard: [],
    solution: [],
    timer: 0,
    difficulty: 'easy',
    gameStatus: 'not_started',
    errors: 0,
    hintsUsed: 0,
    selectedCell: null,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setBoard(state, action: PayloadAction<number[][]>) {
            state.gameBoard = action.payload;
        },
        setSolution(state, action: PayloadAction<number[][]>) {
            state.solution = action.payload;
        },
        updateCell(state, action: PayloadAction<Cell>) {
            const { row, col, value } = action.payload;
            state.gameBoard[row][col] = value;
        },
        setTimer(state, action: PayloadAction<number>) {
            state.timer = action.payload;
        },
        setDifficulty(state, action: PayloadAction<string>) {
            state.difficulty = action.payload;
        },
        setStatus(
            state,
            action: PayloadAction<'not_started' | 'in_progress' | 'completed'>
        ) {
            state.gameStatus = action.payload;
        },
        setErrors(state, action: PayloadAction<number>) {
            state.errors = action.payload;
        },
        setHintsUsed(state, action: PayloadAction<number>) {
            state.hintsUsed = action.payload;
        },
        setSelectedCell(state, action: PayloadAction<Cell | null>) {
            state.selectedCell = action.payload;
        },
    },
});

export const {
    setBoard,
    setSolution,
    updateCell,
    setTimer,
    setDifficulty,
    setStatus,
    setErrors,
    setHintsUsed,
    setSelectedCell,
} = gameSlice.actions;

export default gameSlice.reducer;
