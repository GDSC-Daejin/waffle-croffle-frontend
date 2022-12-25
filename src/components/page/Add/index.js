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
  const [isTodo, setTodo] = useState('');

  const getValue = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...isTodo,
      [name]: value,
    });
    console.log(isTodo);
  };

  const [isView, setView] = useState([]);
  const onsubmit = () => {
    // setView(isTodo({ ...isTodo }));
    // console.log(isView);
    axios
      .post('http://localhost:9092/api/todos', isTodo)
      .then(function (response) {
        console.log('ok');
      })
      .catch(function (error) {
        console.log('error');
      });
  };

  const postTodo = async () => {
    try {
      const result = await axios.post(
        'http://localhost:9092/v3/api-docs/api/todos',
      );
    } catch (e) {
      console.log('error', e);
    }
  };

  const [categoryResponse, setCategoryResponse] = useState([]);
  const [change, setChange] = useState(0);
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
        <Select onClick={newResponse}>
          <option value={0}>카테고리</option>
          {categoryResponse.map((categoryItem) => {
            // 배열 원소마다 option 생성
            return (
              <option value={categoryItem.categoryId}>
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
        onClick={onsubmit}
        //}}
      >
        +
      </AddBtn>
    </AddWrapper>
  );
}

export default Add;
