import React, { useState } from 'react';
import {
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
  deleteIcon,
} from '../../../assets/pageSvg/ExportSvg';
import axios from 'axios';

const Todo = ({ users }) => {
  const [isCheck, setCheck] = useState(false);
  const [isStar, setStar] = useState(false);

  const onClickImg = () => {
    setCheck(!isCheck);
    axios.put('http://localhost:9092/api/todos/' + users.id);
  };
  const onClickStar = () => {
    setStar(!isStar);
  };

  const checkStar = () => {
    // setView(isTodo({ ...isTodo }));
    // console.log(isView);
    axios
      .post('http://localhost:9092/api/todos')
      .then(function (response) {
        console.log('ok');
      })
      .catch(function (error) {
        console.log('error');
      });
  };

  const onDelete = () => {
    axios.delete('http://localhost:9092/api/todos/' + users.id);
  };

  console.log(users);

  return (
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
        <TodoContent>{users.content}</TodoContent>
        <TodoCategory>{users.categoryEntity.categoryTitle}</TodoCategory>
      </TodoText>
      <TodoImg src={deleteIcon} onClick={onDelete} />
      <TodoImg src={isStar ? star : nostar} onClick={onClickStar} />
    </TodoWrapper>
  );
};

export default Todo;
