import React, { useEffect, useState } from 'react';
import { calenderLogo, categoryLogo } from '../../../assets/pageSvg/ExportSvg';

import {
  AddWrapper,
  AddInPutWrapper,
  AddInput,
  CategoryImg,
  CalenderImg,
  AddBtn,
} from './styled';

function Add() {
  const [isTodo, setTodo] = useState();

  const getValue = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...isTodo,
      [name]: value,
    });
    console.log(isTodo);
  };

  const [isView, setView] = useState([]);
  const submit = () => {
    setView(isTodo({ ...isTodo }));
    console.log(isView);
  };

  return (
    <AddWrapper>
      <AddInPutWrapper>
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
