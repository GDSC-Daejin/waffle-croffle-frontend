import React, { useEffect, useState } from 'react';
import { Date, DateImgL, DateImgR, DateWrapper } from './styled';
import { TodayPageWrapper, ListWrapper } from '../PagesStyle';
import date from '../../assets/pageSvg/DateImg.svg';
import Add from '../../components/page/Add';
import Todo from '../../components/page/Todo';
import axios from 'axios';

const Today = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
          // console.log(response.data)
        });
    }, []);

  return (
    <TodayPageWrapper>
      {/*<>*/}
      {/*  <h1>Users</h1>*/}
      {/*  <div users={users} />*/}
      {/*</>*/}
      {/*<div>*/}
      {/*  user.name*/}
      {/*  {users.name}*/}
      {/*</div>*/}
      <DateWrapper>
        <DateImgL src={date} />
        <Date>2022.11.03 목요일</Date>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <Todo />
        <Todo />
        <Todo />
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
