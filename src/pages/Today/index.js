import React from 'react';

import { Date, DateImgL, DateImgR, DateWrapper } from './styled';
import { TodayPageWrapper, ListWrapper } from '../PagesStyle';
import date from '../../assets/pageSvg/DateImg.svg';
import Add from '../../components/page/Add';
import Todo from '../../components/page/Todo';

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
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
