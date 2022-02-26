import React, { FC, Children, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMousetrap from 'react-hook-mousetrap';
import { AnyAction, Dispatch } from 'redux';
import {
  createGrid,
  IReducer,
  selectBlock,
  fillBlock,
} from '../../core/reducers';
import { BLOCK_COORD, INDEX, Number, N } from '../../typings';

import Block from './block';
import { Container, Row } from './styles';

interface IState {
  selectedBlock?: BLOCK_COORD;
  selectedValue: N;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  const fill = useCallback(
    (n: Number) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock));
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  useMousetrap('1', () => fill(1));
  useMousetrap('2', () => fill(2));
  useMousetrap('3', () => fill(3));
  useMousetrap('4', () => fill(4));
  useMousetrap('5', () => fill(5));
  useMousetrap('6', () => fill(6));
  useMousetrap('7', () => fill(7));
  useMousetrap('8', () => fill(8));
  useMousetrap('9', () => fill(9));

  useMousetrap('down', moveDown);
  useMousetrap('left', moveLeft);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);

  useEffect(() => {
    create();
  }, [create]);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
