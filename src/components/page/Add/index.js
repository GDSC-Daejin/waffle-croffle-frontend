import React, { useEffect, useState } from 'react';
import { calenderLogo, categoryLogo } from '../../../assets/pageSvg/ExportSvg';

import {
  AddWrapper,
  AddInPutWrapper,
  AddInput,
  CategoryImg,
  CalenderImg,
  AddBtn,
} from './PageStyle';
import { useRecoilState } from 'recoil';
import { addTodo, viewTodo } from '../../atom/atom';

const Add = () =>{
  const [isAddTodo, setAddTodo] = useRecoilState(addTodo);
} from './styled';

function Add() {
  const [isTodo, setTodo] = useState();

  const getValue = (e) => {
    const { name, value } = e.target;
    setAddTodo({
      ...isAddTodo,
      [name]: value
    })
    console.log(isAddTodo);
    setTodo({
      ...isTodo,
      [name]: value,
    });
    console.log(isTodo);
  };

  const [isView, setView] = useRecoilState(viewTodo);

  const submit = () => {
    setView({...isAddTodo})
    console.log(isView)
  }
    setView(isTodo({ ...isTodo }));
    console.log(isView);
  };

  return (
    <AddWrapper>
      <AddInPutWrapper>
        <AddInput type="text" placeholder="입려어어억ㄱ" onChange={getValue} name='content' />
        <CategoryImg src={categoryLogo} alt="category" />
        <CalenderImg src={calenderLogo} alt="calender" />
      </AddInPutWrapper>
      <button onClick={submit}>버튼</button>
      <AddBtn Onclick={()=>{console.log(isAddTodo)}}>+</AddBtn>
        <AddInput
          type="text"
          placeholder="입려어어억ㄱ"
          onChange={getValue}
          name="title"
        />
        <CategoryImg src={categoryLogo} alt="category" />
        <CalenderImg src={calenderLogo} alt="calender" />
      </AddInPutWrapper>
      <AddBtn
        Onclick={() => {
          // setView(isView.concat({...isTodo}))
          console.log(isView);
        }}
      >
        +
      </AddBtn>
    </AddWrapper>
  );
}

export default Add;
