import React from 'react';
import { MenuWapper, HorizonBar } from './styled';
import TopMenu from './TopMenu';
import Title from './Title';
import CreateCategory from './CreateCategory';
import Category from './Category';

const Menu = () => {
  return (
    <MenuWapper>
      <Title />
      <TopMenu />
      <HorizonBar />
      <Category />
      <CreateCategory />
    </MenuWapper>
  );
};

export default Menu;
