'use client';

import { useParams } from 'next/navigation';
import { Difficulty } from '@/components';

export default function Page() {
    const params = useParams();

    const mode = params.mode;

    return (
        <div className={'flex h-full w-full items-center justify-center'}>
            <div
                className={
                    'flex w-3/5 flex-col items-center gap-16 rounded-lg bg-brighter p-16 text-center shadow-lg'
                }
            >
                <div
                    className={
                        'flex flex-col items-center justify-center gap-3 text-white'
                    }
                >
                    <h2 className={'text-2xl'}>Game settings</h2>
                    <h3 className={'text-xl'}>{mode}</h3>
                </div>
                <div className={'flex w-full gap-4 text-lg'}>
                    {availableDifficulty.map((difficulty) => (
                        <Difficulty
                            key={difficulty.id}
                            difficulty={difficulty}
                        />
                    ))}
                </div>
                <div
                    className={
                        'group relative w-fit cursor-pointer overflow-hidden'
                    }
                >
                    <div
                        className={
                            'absolute right-full top-0 h-full w-full bg-action transition-transform ' +
                            'rounded-lg duration-300 ease-in-out group-hover:translate-x-full'
                        }
                    ></div>
                    <button
                        className={
                            'rounded-lg border-2 border-action px-6 py-2 text-xl text-white group-hover:text-dark'
                        }
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
    },
    {
        id: 1,
        label: 'Medium',
    },
    {
        id: 2,
        label: 'Hard',
    },
    {
        id: 3,
        label: 'Expert',
    },
    {
        id: 4,
        label: 'Master',
    },
    {
        id: 5,
        label: 'Extreme',
    },
];
