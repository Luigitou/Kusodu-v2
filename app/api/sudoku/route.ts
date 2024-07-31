import { NextRequest, NextResponse } from 'next/server';

type responseData = {
    sudoku: string;
};

export async function GET(request: NextRequest) {
    const response = NextResponse;
    const id = request.nextUrl.searchParams.get('id');
    console.log(request.nextUrl.searchParams);
    return response.json({ sudoku: 'sudoku', id: id }, { status: 200 });
}
