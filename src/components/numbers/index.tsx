import React, { FC } from 'react';
import { Container } from './styles';

import { Number } from '../../typings';
import { Button } from '..';

const Numbers: FC = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as Number[]).map((value) => (
        <Button key={value}>{value}</Button>
      ))}
    </Container>
  );
};

export default Numbers;
