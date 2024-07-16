type DifficultyProps = {
    difficulty: {
        id: number;
        label: string;
    };
};

export function Difficulty({ difficulty }: DifficultyProps) {
    return (
        <div className={'group h-20 w-1/5'}>
            <button
                className={
                    'box-border flex h-full w-full  cursor-pointer items-center justify-center rounded-lg ' +
                    'border-action bg-dark text-white transition-transform duration-200 ease-in-out group-hover:-translate-y-2 group-hover:border-2'
                }
            >
                {difficulty.label}
            </button>
        </div>
    );
}
