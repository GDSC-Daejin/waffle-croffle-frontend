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
import axios from 'axios';

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
    axios.post('/naver.com', {
      content:[isView]
    }).then(function(response){
      console.log('ok')
    })
      .catch(function( error){
      console.log('error')
    })
  };

  const postTodo = async () => {
    try{
      const result = await axios.post('/',{content: [isView]})
    }
    catch (e) {
      console.log('error', e)
    }
  }

  return (
    <AddWrapper>
      <AddInPutWrapper>
        <AddInput
          type="text"
          placeholder="입려어어억ㄱ"
          onChange={getValue}
          name="content"
        />
        <CategoryImg src={categoryLogo} alt="category" />
        <CalenderImg src={calenderLogo} alt="calender" />
      </AddInPutWrapper>
      <AddBtn
        // Onclick={() => {
        //   // setView(isView.concat({...isTodo}))
        //   console.log(isView);
      onClick={postTodo}
        //}}
      >
        +
      </AddBtn>
    </AddWrapper>
  );
}

export default Add;
