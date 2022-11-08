import React from 'react';

import {
  Date,
  DateImgL,
  DateImgR,
  DateWrapper,
  ListWrapper,
  TodayPageWrapper,
  TodoWrapper,
} from '../PageStyle';
import date from '../../../assets/DateImg.svg';
import Add from '../Add';

const Today = () => {
  return (
    <TodayPageWrapper>
      <DateWrapper>
        <DateImgL src={date} />
        <Date>2022.11.03 목요일</Date>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <TodoWrapper></TodoWrapper>
        <TodoWrapper></TodoWrapper>
        <TodoWrapper></TodoWrapper>
        <TodoWrapper></TodoWrapper>
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
