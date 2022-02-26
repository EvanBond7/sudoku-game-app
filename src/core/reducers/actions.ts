import { Action, AnyAction } from 'redux';
import { BLOCK_COORD, Number } from '../../typings';

import * as types from './types';

export const createGrid = (): Action => ({
  type: types.CREATE_GRID,
});

export const fillBlock = (value: Number, coords: BLOCK_COORD): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
});

export const selectBlock = (coords: BLOCK_COORD): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});
