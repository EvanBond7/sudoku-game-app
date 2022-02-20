import { BLOCK_COORD, Grid } from '../../typings';

export interface IReducer {
  grid?: Grid;
  selectedBlock?: BLOCK_COORD;
}
