'use client';

import { useParams } from 'next/navigation';
import { Difficulty } from '@/components';
import { useState } from 'react';
import classNames from 'classnames';
import { fetchGameGrid } from '@/services';

export default function Page() {
    const params = useParams();

    const mode = params.mode;

    const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(
        null
    );

    const startGame = () => {
        if (selectedDifficulty === null) return;
        fetchGameGrid(selectedDifficulty, 9)
            .catch((error) => {
                if (error instanceof Error) {
                    console.error('An error occurred:', error.message);
                }
            })
            .then((data) => {
                console.log('Game started', data);
            });
    };

    return (
        <div className={'flex h-full w-full items-center justify-center'}>
            <div
                className={
                    'flex flex-col items-center gap-12 rounded-lg bg-brighter p-16 text-center shadow-lg'
                }
            >
                <div
                    className={
                        'flex flex-col items-center justify-center gap-3 text-white'
                    }
                >
                    <span className={'flex cursor-default gap-6 text-3xl'}>
                        <h2>Game settings</h2>
                        <h2>-</h2>
                        <h2>{mode}</h2>
                    </span>
                </div>
                <div
                    className={
                        'flex w-full flex-col gap-3 rounded-lg bg-dark p-6'
                    }
                >
                    <span className={'w-fit cursor-default text-lg text-white'}>
                        Select a difficulty
                    </span>
                    <div className={'flex w-full gap-4 text-lg'}>
                        {availableDifficulty.map((difficulty) => (
                            <Difficulty
                                key={difficulty.id}
                                difficulty={difficulty}
                                selectedDifficulty={{
                                    selectedDifficulty,
                                    setSelectedDifficulty,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className={
                        'group relative w-fit cursor-pointer overflow-hidden rounded-lg'
                    }
                >
                    {selectedDifficulty !== null && (
                        <div
                            className={
                                'absolute right-full top-0 h-full w-full bg-action transition-transform ' +
                                'rounded-lg duration-300 ease-in-out group-hover:translate-x-full'
                            }
                        ></div>
                    )}
                    <button
                        className={classNames(
                            `relative z-10 rounded-lg border-2 border-action px-6 py-2 text-xl text-white`,
                            {
                                'text-white': selectedDifficulty === null,
                                'group-hover:text-dark':
                                    selectedDifficulty !== null,
                                'cursor-default': selectedDifficulty === null,
                            }
                        )}
                        onClick={startGame}
                    >
                        Start game !
                    </button>
                </div>
            </div>
        </div>
    );
}

const availableDifficulty = [
    {
        id: 0,
        label: 'Easy',
        cellsToRemove: 20,
    },
    {
        id: 1,
        label: 'Medium',
        cellsToRemove: 30,
    },
    {
        id: 2,
        label: 'Hard',
        cellsToRemove: 40,
    },
    {
        id: 3,
        label: 'Expert',
        cellsToRemove: 50,
    },
    {
        id: 4,
        label: 'Master',
        cellsToRemove: 55,
    },
    {
        id: 5,
        label: 'Extreme',
        cellsToRemove: 60,
    },
];
