import { gridType } from '@/types';

export const fetchGameGrid = async (
    difficulty: number,
    size: number
): Promise<gridType> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/sudoku?difficulty=${difficulty}&size=${size}`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};
