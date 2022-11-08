import React from 'react';
import { GlobalStyle, TodaysCroffle, MenuWapper } from './AppStyle';
import TopMenu from './components/Menu/TopMenu';
import Title from './components/Menu/Title';
import Page from './components/Page/Page';

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
