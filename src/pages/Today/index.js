import React, { useEffect, useState } from 'react';
import {
  Date,
  DateImgL,
  DateImgR,
  DateWrapper,
  TodoWrapper,
  TodoImg,
  TodoText,
  TodoContent,
  TodoCategory,
} from './styled';
import {
  check,
  checked,
  detail,
  star,
  nostar,
} from '../../assets/pageSvg/ExportSvg';
import { TodayPageWrapper, ListWrapper } from '../PagesStyle';
import date from '../../assets/pageSvg/DateImg.svg';
import Add from '../../components/page/Add';
import Todo from '../../components/page/Todo';
import axios from 'axios';

const Today = () => {
  const [isCheck, setCheck] = useState(false);
  const [isStar, setStar] = useState(false);
  const onClickImg = () => {
    setCheck(!isCheck);
  };
  const onClickStar = () => {
    setStar(!isStar);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9092/api/todos')
      .then((res) => setUsers(res.data));
  }, []);

  const todayTime = () => {
    let date = new Date();
    let year = date.getFullYear();
    let todayMonth = date.getMonth() + 1;
    let todayDate = date.getDate()
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[date.getDay()];
    return year + '년' + todayMonth + '월' + todayDate + '일' + dayOfWeek + '요일';
  }

  return (
    <TodayPageWrapper>
      {/*<>*/}
      {/*  <h1>Users</h1>*/}
      {/*  <div users={users} />*/}
      {/*</>*/}
      {/*<div>*/}
      {/*  <button onClick={() => console.log(users)}>dd</button>*/}
      {/*  user.name*/}
      {/*  <div>*/}
      {/*    {users.map(user => {*/}
      {/*      return (<Todo key={user.id}>*/}
      {/*        {user.content}*/}
      {/*      </Todo>)*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <DateWrapper>
        <DateImgL src={date} />
        <Date>2022.12.25 일요일</Date>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <div>
          <div>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <Todo users={user} id={user.id} status={user.status}/>
                </div>
              );
            })}
          </div>
        </div>
        {/*<Todo />*/}
        {/*<Todo />*/}
        {/*<Todo />*/}
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
