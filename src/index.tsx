import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Content, Title, Card, Grid, Numbers, NewButton } from './components';

import { unregister, configureStore } from './core';
import { GlobalStyle, theme } from './style';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Provider store={store}>
      <Content>
        <Title>Sudoku App</Title>
        <Card>
          <NewButton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
