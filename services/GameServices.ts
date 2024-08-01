import { gridType } from '@/types';

export const fetchGameGrid = async (
    difficulty: number,
    size: number
): Promise<gridType> => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/sudoku?difficulty=${difficulty}&size=${size}`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};
