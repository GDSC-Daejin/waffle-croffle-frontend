import React, { useState } from 'react';
import axios from 'axios';
import {
  NewCategoryBtn,
  ModalBackdrop,
  ModalView,
  CloseBtn,
  CategoryInput,
  CategoryTag,
} from './styled';

const CreateCategory = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleModal = () => {
    setisOpen(!isOpen);
  };

  const [content, setContent] = useState(null);
  const addCategory = () => {
    //내용이 입력되었으면 TODO 추가
    if (content) {
      postCategoryApi(content);
      setContent('');
      console.log(content);
    } else {
      //내용이 없으면 알림
      alert('내용을 입력해주세요.');
    }
  };

  const handleOnKeyPress = (e) => {
    // 엔터 입력
    if (e.key === 'Enter') {
      addCategory();
    }
  };

  function postCategoryApi() {
    axios
      .post('http://localhost:9092/', {
        categoryId: 0,
        categoryTitle: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <NewCategoryBtn onClick={handleModal}>+ New Category</NewCategoryBtn>
      {isOpen ? (
        <ModalBackdrop>
          <ModalView>
            <CloseBtn onClick={handleModal}>&times;</CloseBtn>
            <CategoryTag> New Category</CategoryTag>
            <CategoryInput
              placeholder={'Category Name'}
              value={content ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
              type={'text'}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행
            ></CategoryInput>
            <button onClick={addCategory}>확인</button>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};

export default CreateCategory;
