import React from 'react';
import { GlobalStyle, TodaysCroffle, MenuWapper } from './AppStyle';
import TopMenu from './components/Menu/TopMenu';
import Title from './components/Menu/Title';
import Page from './components/Page/Page';
import { RecoilRoot } from 'recoil';
import TopMenu from './components/menu/TopMenu';
import Title from './components/menu/Title';
import Page from './Page';

const App = () => {
  return (
    <RecoilRoot>
      <TodaysCroffle>
        <GlobalStyle />
        <MenuWapper>
          <Title />
          <TopMenu />
        </MenuWapper>
        <Page />
      </TodaysCroffle>
    </RecoilRoot>
  );
};

export default App;
