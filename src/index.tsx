import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { unregister } from './core';
import { GlobalStyle, theme } from './style';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>Sudoku App!</div>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
