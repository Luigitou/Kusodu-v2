type DifficultyProps = {
    difficulty: {
        id: number;
        label: string;
    };
    selectedDifficulty: {
        selectedDifficulty: number | null;
        setSelectedDifficulty: (value: number) => void;
    };
};

export function Difficulty({
    difficulty,
    selectedDifficulty,
}: DifficultyProps) {
    if (selectedDifficulty.selectedDifficulty === difficulty.id) {
        return (
            <div className={'group h-20 w-36'}>
                <button
                    className={
                        'box-border flex h-full w-full  cursor-pointer items-center justify-center rounded-lg ' +
                        'translate-y-0 border-2 border-action bg-brighter text-action transition-transform duration-200 ease-in-out'
                    }
                >
                    {difficulty.label}
                </button>
            </div>
        );
    } else {
        return (
            <div
                className={'group h-20 w-36'}
                onClick={() =>
                    selectedDifficulty.setSelectedDifficulty(difficulty.id)
                }
            >
                <button
                    className={
                        'box-border flex h-full w-full  cursor-pointer items-center justify-center rounded-lg ' +
                        'border-action bg-brighter text-white transition-transform duration-200 ease-in-out group-hover:-translate-y-2 group-hover:border-2'
                    }
                >
                    {difficulty.label}
                </button>
            </div>
        );
    }
}
