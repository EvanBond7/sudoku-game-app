import React, { FC, useCallback } from 'react';
import { Button } from '..';

import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { createGrid } from '../../core/reducers';

const NewButton = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm('Вы уверены, что хотите начать новую игру?')) {
      dispatch(createGrid());
    }
  }, [dispatch]);
  return <Button onClick={createNewGrid}>Новая игра</Button>;
};

export default NewButton;
