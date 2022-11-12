import React from 'react';

import {
  Date,
  DateImgL,
  DateImgR,
  DateWrapper,
  ListWrapper,
  TodayPageWrapper,
} from '../PageStyle';
import date from '../../../assets/pageSvg/DateImg.svg';
import Add from '../Add';
import Todo from '../Todo';

const Today = () => {
  return (
    <TodayPageWrapper>
      <DateWrapper>
        <DateImgL src={date} />
        <Date>2022.11.03 목요일</Date>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <Todo />
        <Todo />
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
