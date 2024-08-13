type CellProps = {
    value: number;
    solution: number;
};

export const Cell = ({ value, solution }: CellProps) => {
    return <td>{value}</td>;
};
