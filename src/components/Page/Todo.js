import React, { useState } from 'react';
import {
  TodoWrapper,
  TodoImg,
  TodoText,
  TodoContent,
  TodoCategory,
} from './PageStyle';
import {
  check,
  checked,
  detail,
  star,
  nostar,
} from '../../assets/pageSvg/ExportSvg';

const Todo = () => {
  const [isCheck, setCheck] = useState(false);
  const [isStar, setStar] = useState(false);
  const onClickImg = () => {
    setCheck(!isCheck);
  };
  const onClickStar = () => {
    setStar(!isStar);
  };
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
        <TodoContent>잉여글자</TodoContent>
        <TodoCategory>잉여카테고리</TodoCategory>
      </TodoText>
      <TodoImg src={detail} />
      <TodoImg src={isStar ? star : nostar} onClick={onClickStar} />
    </TodoWrapper>
  );
};

export default Todo;
