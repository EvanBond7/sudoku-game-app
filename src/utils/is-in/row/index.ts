import { Grid, Number } from '../../../typings';

interface IInput {
  grid: Grid;
  row: number;
  value: Number;
}

function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
