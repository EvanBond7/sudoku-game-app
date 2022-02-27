import React, { FC, useCallback } from 'react';
import { Button } from '..';

import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { createGrid } from '../../core/reducers';

const NewButton = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      dispatch(createGrid());
    }
  }, [dispatch]);
  return <Button onClick={createNewGrid}>New Game</Button>;
};

export default NewButton;
