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
} from '../../../assets/pageSvg/ExportSvg';

const Todo = () => {
  const [isCheck, setCheck] = useState(false);
  const [isStar, setStar] = useState(false);
  const onClickImg = () => {
    setCheck(!isCheck);
  };
  const onClickStar = () => {
    setStar(!isStar);
  };

  const [isTodo = '22', setTodo] = useState();
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
        <TodoContent>{isTodo}</TodoContent>
        <TodoCategory onClick={() => setTodo('하이')}>
          잉여카테고리
        </TodoCategory>
      </TodoText>
      <TodoImg src={detail} />
      <TodoImg src={isStar ? star : nostar} onClick={onClickStar} />
    </TodoWrapper>
  );
};

export default Todo;
