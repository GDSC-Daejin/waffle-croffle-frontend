import React, { useEffect, useState } from 'react';
import { calenderLogo, categoryLogo } from '../../../assets/pageSvg/ExportSvg';

import {
  AddWrapper,
  AddInPutWrapper,
  AddInput,
  CategoryImg,
  CalenderImg,
  Select,
  AddBtn,
} from './styled';
import axios from 'axios';

import { categorySelector } from '../../menu/atom';
import { useRecoilValueLoadable } from 'recoil';

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const categoryResponse = useRecoilValueLoadable(categorySelector);
  // 비동기 처리 응답이 아직 오지 않았을 경우
  if (categoryResponse.state === 'loading') return <></>;

  return (
    <AddWrapper>
      <AddInPutWrapper>
        <AddInput
          type="text"
          placeholder="입려어어억ㄱ"
          onChange={getValue}
          name="content"
        />
        <Select>
          <option value={0}>카테고리</option>
          {categoryResponse.contents.map((categoryItem) => {
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
