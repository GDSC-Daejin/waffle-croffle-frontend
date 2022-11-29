import React from 'react';
import { GlobalStyle, TodaysCroffle } from './AppStyle';
import Menu from './components/menu';
import Page from './Page';

const App = () => {
  return (
    <TodaysCroffle>
      <GlobalStyle />
      <Menu />
      <Page />
    </TodaysCroffle>
  );
};

export default App;
