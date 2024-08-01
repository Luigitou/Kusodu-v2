import { NextRequest, NextResponse } from 'next/server';
import { generateSudoku } from '@/app/api/sudoku/GridGenerator';

type responseData = {
    sudoku: string;
};

export async function GET(request: NextRequest) {
    try {
        const difficulty = request.nextUrl.searchParams.get('difficulty');
        const size = request.nextUrl.searchParams.get('size');

        if (!difficulty || !size) {
            return NextResponse.json(
                { error: 'Please provide difficulty and size' },
                { status: 400 }
            );
        }

        const grid = generateSudoku(parseInt(difficulty), parseInt(size));

        const response = NextResponse;
        const id = request.nextUrl.searchParams.get('id');
        return response.json(grid, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json(
                { error: 'An unknown error occurred !' },
                { status: 500 }
            );
        }
    }
}
