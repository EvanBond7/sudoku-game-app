import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components';

import { Content, Title, Card, Grid, Numbers, NewButton } from './components';

import { register, configureStore } from './core';
import { GlobalStyle, theme } from './style';

const { persistor, store } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content>
          <Title>Sudoku App</Title>
          <Card>
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

register();
