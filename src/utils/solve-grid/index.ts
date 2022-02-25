import { checkGrid, detectSquare, isInCol, isInRow, isInSquare } from '..';
import global from '../../global';
import { Grid, Number } from '../../typings';

const numbers: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveGrid(grid: Grid) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = detectSquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
      break;
    }
  }

  grid[row][col] = 0;
}

export default solveGrid;
