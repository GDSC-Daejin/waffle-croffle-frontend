import React, { useEffect, useState } from 'react';
import {
  DateImgL,
  DateImgR,
  DateWrapper,
  TodoWrapper,
  TodoImg,
  TodoText,
  TodoContent,
  TodoCategory, TodayDate,
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

  console.log(users);


  const days = [
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
    '월요일'
  ];

  const today = new Date(2022, 0, 1);

// 요일 이름 출력하기
  const dayName = days[today.getDay()];

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }
  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
  }
  toStringByFormatting(new Date(2022, 0, 1));


  return (
    <TodayPageWrapper>
      <DateWrapper>
        <DateImgL src={date} />
        <TodayDate>{toStringByFormatting(new Date(),'.')+' '+ dayName}</TodayDate>
        <DateImgR src={date} />
      </DateWrapper>
      <ListWrapper>
        <div>
          <div>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <Todo users={user} id={user.id} status={user.status} />
                </div>
              );
            })}
          </div>
        </div>
      </ListWrapper>
      <Add />
    </TodayPageWrapper>
  );
};

export default Today;
