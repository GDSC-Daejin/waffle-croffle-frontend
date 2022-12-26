import React, { useEffect, useState } from 'react';

import {
  AddWrapper,
  AddInPutWrapper,
  AddInput,
  Select,
  AddBtn,
} from './styled';
import axios from 'axios';

function Add() {
  // 투두 값 입력을 useState로 받음
  const [isTodo, setTodo] = useState('');
  const getValue = (e) => {
    /*const { name, value } = e.target;
    setTodo({
      ...isTodo,
      [name]: value,
    });
  console.log(isTodo);*/
    setTodo(e.target.value);
  };

  const [isView, setView] = useState([]); //넌 뭐니

  //post todo 함수
  const postTodo = () => {
    // setView(isTodo({ ...isTodo }));
    // console.log(isView);
    axios
      .post('http://localhost:9092/api/todos/' + postId, {
        content: isTodo,
        categoryEntity: {
          categoryId: postId,
          categoryTitle: postTitle,
        },
      })
      .then(function (response) {
        console.log('ok');
      })
      .catch(function (error) {
        console.log('error');
      });
  };

  // selectBox에서 선택된 값을 useState로 저장 (카테고리 아이디, 카테고리 타이틀)
  const [postTitle, setPostTitle] = useState('');
  const [postId, setPostId] = useState('');
  const selectBoxChange = () => {
    var target = document.getElementById('changeTest');
    if (target != null) {
      setPostTitle(target.options[target.selectedIndex].text);
      setPostId(target.options[target.selectedIndex].value);
    }
  };

  // selectbox에 카테고리 내용 불러오기
  const [categoryResponse, setCategoryResponse] = useState([]);
  const [change, setChange] = useState(0); //useEffect를 일으키는 용도

  useEffect(() => {
    async function getApi() {
      const getCategory = await axios.get('http://localhost:9092/');
      setCategoryResponse(getCategory.data);
    }
    getApi();
  }, [change]);
  const newResponse = () => setChange((change) => (change += 1));

  return (
    <AddWrapper>
      <AddInPutWrapper>
        <AddInput
          type="text"
          placeholder="입려어어억ㄱ"
          onChange={getValue}
          name="content"
        />
        <Select
          id="changeTest"
          name="changeTest"
          onClick={newResponse}
          onChange={selectBoxChange}
        >
          <option value="0">카테고리</option>
          {categoryResponse.map((categoryItem) => {
            // 배열 원소마다 option 생성
            return (
              <option
                key={categoryItem.categoryId}
                id="categoryOption"
                value={categoryItem.categoryId}
              >
                {categoryItem.categoryTitle}
              </option>
            );
          })}
        </Select>
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
