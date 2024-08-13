import { Actions, GameData, Grid, Numbers } from '@/components';

export default function Page() {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex'}>
                <Grid />
                <div className={'flex-col'}>
                    <GameData />
                    <Actions />
                </div>
            </div>
            <Numbers />
        </div>
    );
}
