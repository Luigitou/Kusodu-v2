'use client';

import { useParams, useRouter } from 'next/navigation';
import { Difficulty } from '@/components';
import { useState } from 'react';
import classNames from 'classnames';
import { fetchGameGrid } from '@/services';
import { useNotifier } from '@/hooks';
import { useDispatch } from 'react-redux';
import { difficulty, gridType } from '@/types';
import { initGame } from '@/store/Game/GameReducer';

export default function Page() {
    const notify = useNotifier();
    const dispatch = useDispatch();
    const params = useParams();
    const router = useRouter();

    const mode = params.mode;

    const [selectedDifficulty, setSelectedDifficulty] = useState<difficulty>();

    const startGame = () => {
        if (
            selectedDifficulty === null ||
            selectedDifficulty?.cellsToRemove === undefined
        )
            return;
        fetchGameGrid(selectedDifficulty?.cellsToRemove, 9)
            .catch((error) => {
                if (error instanceof Error) {
                    notify({
                        isError: true,
                        message: error.message,
                    });
                }
            })
            .then((data) => {
                if (data === undefined) {
                    notify({
                        isError: true,
                        message: "Couldn't fetch game grid",
                    });
                    return;
                }
                launchGame(data);
            });
    };

    const launchGame = (gameGrid: gridType) => {
        if (
            selectedDifficulty === null ||
            selectedDifficulty?.cellsToRemove === undefined
        ) {
            return;
        }
        dispatch(
            initGame({
                gameBoard: gameGrid.gameBoard,
                solution: gameGrid.solution,
                difficulty: selectedDifficulty.label,
            })
        );
        router.push(`/${mode}/1`);
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
                        'flex w-full flex-col gap-3 rounded-lg bg-dark p-6 shadow-lg'
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
