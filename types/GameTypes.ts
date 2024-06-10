export type Cell = {
    value: number | null;
    solution: number;
    isLocked: boolean;
}

export type Grid = Array<Array<Cell>>;

export type Game = {
  grid: Grid;
  score: number;
  gameOver: boolean;
  won: boolean;
  difficulty: string;
};
