import { NextRequest, NextResponse } from 'next/server';
import { generateSudoku } from '@/app/api/sudoku/GridGenerator';

type responseData = {
    sudoku: string;
};

export async function GET(request: NextRequest) {
    const grid = generateSudoku(50, 9);
    const response = NextResponse;
    const id = request.nextUrl.searchParams.get('id');
    return response.json(grid, { status: 200 });
}
