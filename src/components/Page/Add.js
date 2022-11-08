import React from 'react';
import categoryLogo from '../../assets/category.svg';
import weekLogo from '../../assets/week.svg';
import {
  AddWrapper,
  AddInPutWrapper,
  AddInput,
  CategoryImg,
  CalenderImg,
  AddBtn,
} from './PageStyle';

const Add = () => {
  return (
    <AddWrapper>
      <AddInPutWrapper>
        <AddInput type="text" placeholder="입려어어억ㄱ" />
        <CategoryImg src={categoryLogo} alt="category" />
        <CalenderImg src={weekLogo} alt="calender" />
      </AddInPutWrapper>
      <AddBtn>+</AddBtn>
    </AddWrapper>
  );
};

export default Add;
