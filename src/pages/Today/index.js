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
        <Date>2022.11.03 목요일</Date>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <div>
          <div>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  {/*{user.content}*/}
                  <TodoWrapper>
                    <TodoImg
                      src={isCheck ? checked : check}
                      onClick={onClickImg}
                      alt="check"
                    />
                    <TodoText
                      color={isCheck ? '#999999' : '#f1f1f1'}
                      deco={isCheck ? 'line-through' : 'none'}
                    >
                      <TodoContent>{user.content}</TodoContent>
                      <TodoCategory>카테고리</TodoCategory>
                    </TodoText>
                    <TodoImg src={detail} />
                    <TodoImg
                      src={isStar ? star : nostar}
                      onClick={onClickStar}
                    />
                  </TodoWrapper>
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
