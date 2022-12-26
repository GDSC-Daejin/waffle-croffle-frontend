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

  const onsubmit = () => {
    axios
      .post('http://localhost:9092/api/todos', isTodo)
      .then(function (response) {
        // console.log('ok');
        window.location.replace('/')
      })
      .catch(function (error) {
        console.log('error');
      });
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

  const [categoryTitle, setCategoryTitle] = useState('');
  const newResponse = () => setChange((change) => (change += 1));
  const handleChange = (e)=> {
    setCategoryTitle(e.target.value);
    console.log(categoryTitle);
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
        <Select onClick={newResponse} onChange={getValue} name='categoryTitle'>
          <option value={0}>카테고리</option>
          <option value={'카테고리2'}>카테고리2</option>
          <option value='카테고리3'>카테고리3</option>
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
        onClick={onsubmit}
      >
        +
      </AddBtn>
    </AddWrapper>
  );
}

export default Add;
