import { BLOCK_COORD, Grid } from '../../typings';

export interface IReducer {
  challengeGrid?: Grid;
  selectedBlock?: BLOCK_COORD;
  solvedGrid?: Grid;
  workingGrid?: Grid;
}
