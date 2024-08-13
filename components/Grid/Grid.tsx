'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Cell } from '@/components/Grid/Cell';
import { Fragment, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export function Grid() {
    const router = useRouter();
    const params = useParams();

    const grid = useSelector((state: RootState) => state.game.gameBoard);
    const solution = useSelector((state: RootState) => state.game.solution);

    useEffect(() => {
        // if there is no grid, go back to /{mode}
        if (!grid.length) {
            router.push(`/${params.mode}`);
        }
    }, [grid]);

    return (
        <section>
            <table>
                <tbody>
                    {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Fragment key={cellIndex}>
                                    <Cell
                                        value={cell}
                                        solution={solution[rowIndex][cellIndex]}
                                    />
                                </Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
