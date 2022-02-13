import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content, Title, Card, Grid } from './components';

import { unregister } from './core';
import { GlobalStyle, theme } from './style';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Content>
      <Title>Sudoku App</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
