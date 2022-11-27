import React, { useState } from 'react';
import axios from 'axios';
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
} from '../../assets/pageSvg/ExportSvg';
import { atom, useRecoilState } from 'recoil';
import add from './Add';
import { addTodo, viewTodo } from '../../atom/atom';
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

  const [isAddTodo, setAddTodo] = useRecoilState(viewTodo);

  async function getList() {
    try {
      const response = await axios.get('http://localhost:9092/api/todos');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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
        <TodoContent onClick={()=>{console.log(isAddTodo)}}>하하</TodoContent>
        <TodoCategory onClick={getList}>잉여카테고리</TodoCategory>
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
