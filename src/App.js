import React from 'react';
import { GlobalStyle, TodaysCroffle, MenuWapper } from './AppStyle';
import TopMenu from './components/Menu/TopMenu';
import Title from './components/Menu/Title';
import Page from './components/Page/Page';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <body>
      <TodaysCroffle>
        <GlobalStyle />
        <MenuWapper>
          <Title />
          <TopMenu />
        </MenuWapper>
        <Page />
      </TodaysCroffle>
      </body>
    </RecoilRoot>
  );
};

export default App;
