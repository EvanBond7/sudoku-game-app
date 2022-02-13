import { Grid, Number } from '../../../typings';

interface IInput {
  col: number;
  grid: Grid;
  value: Number;
}

function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }

  return false;
}

export default isInCol;
