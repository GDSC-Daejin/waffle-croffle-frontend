import React from 'react';
import { calenderLogo, categoryLogo } from '../../assets/pageSvg/ExportSvg';

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
        <CalenderImg src={calenderLogo} alt="calender" />
      </AddInPutWrapper>
      <AddBtn>+</AddBtn>
    </AddWrapper>
  );
};

export default Add;
