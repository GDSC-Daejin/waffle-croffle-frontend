import React from 'react';
import { GlobalStyle, TodaysCroffle } from './AppStyle';
import Menu from './components/menu';
import Page from './Page';
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
    <TodaysCroffle>
      <GlobalStyle />
      <Menu />
      <Page />
    </TodaysCroffle>
    </RecoilRoot>
  );
};

export default App;
