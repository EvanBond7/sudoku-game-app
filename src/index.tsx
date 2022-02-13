import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content, Title, Card, Grid } from './components';
import GridApp from './components/grid';
import { unregister } from './core';
import { GlobalStyle, theme } from './style';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Content>
      <Title>Sudoku App</Title>
      <Card>
        <GridApp />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
