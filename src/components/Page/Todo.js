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
import { atom, useRecoilState } from 'recoil';
import add from './Add';
import { addTodo, viewTodo } from '../../atom/atom';

const Todo = () => {
  const [isCheck, setCheck] = useState(false);
  const [isStar, setStar] = useState(false);
  const onClickImg = () => {
    setCheck(!isCheck);
  };
  const onClickStar = () => {
    setStar(!isStar);
  };

  const [isAddTodo, setAddTodo] = useRecoilState(viewTodo);

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
        <TodoContent onClick={()=>{console.log(isAddTodo)}}>하하</TodoContent>
        <TodoCategory>잉여카테고리</TodoCategory>
      </TodoText>
      <TodoImg src={detail} />
      <TodoImg src={isStar ? star : nostar} onClick={onClickStar} />
    </TodoWrapper>
  );
};

export default Todo;
