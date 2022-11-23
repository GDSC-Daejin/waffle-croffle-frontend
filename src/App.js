import React from 'react';
import { GlobalStyle, TodaysCroffle, MenuWapper } from './AppStyle';
import TopMenu from './components/menu/TopMenu';
import Title from './components/menu/Title';
import Page from './Page';

const App = () => {
  return (
    <TodaysCroffle>
      <GlobalStyle />
      <MenuWapper>
        <Title />
        <TopMenu />
      </MenuWapper>
      <Page />
    </TodaysCroffle>
  );
};

export default App;
