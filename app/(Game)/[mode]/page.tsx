'use client';

import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();

    const mode = params.mode;

    return (
        <div className={'flex h-full w-full items-center justify-center'}>
            <div
                className={' rounded-lg bg-brighter p-16 text-center shadow-lg'}
            >
                <div
                    className={
                        'flex flex-col items-center justify-center gap-3 text-white'
                    }
                >
                    <h2 className={'text-2xl'}>Difficulty selector</h2>
                    <h3 className={'text-xl'}>{mode}</h3>
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
