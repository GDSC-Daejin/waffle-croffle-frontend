import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CategoryWrapper,
  CategoryBtn,
  TrashLogo,
  NewCategoryBtn,
  ModalBackdrop,
  ModalView,
  CloseBtn,
  CategoryInput,
  CategoryTag,
  CreateBtn,
} from './styled.js';
import { trashLogo } from '../../../assets/menuSvg/ExportSvg.js';

const Category = () => {
  const [categoryResponse, setCategoryResponse] = useState([]);
  const [change, setChange] = useState(0);
  useEffect(() => {
    async function getApi() {
      const getCategory = await axios.get('http://localhost:9092/');
      console.log(getCategory.data);
      setCategoryResponse(getCategory.data);
    }
    getApi();
  }, [change]);

  // 카테고리 생성 모달의 상태
  const [isOpen, setisOpen] = useState(false);
  // 카테고리 생성 모달의 상태 변경
  const handleModal = () => {
    setisOpen(!isOpen);
  };

  const [input, setInput] = useState('');

  const addCategory = () => {
    if (input) {
      //내용이 입력되었으면 TODO 추가
      postCategoryApi(input); // 서버로 post
      setInput(''); // 내용 초기화
      handleModal(); // 모달창 닫기
      setTimeout(() => setChange((change) => (change += 1)), 500);
    } else {
      //내용이 없으면 알림
      alert('내용을 입력해주세요.');
    }
  };

  // 엔터 입력시에도 addCategory 작동
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      addCategory();
    }
  };
  // post API
  async function postCategoryApi() {
    await axios
      .post('http://localhost:9092/', {
        categoryId: 0,
        categoryTitle: input,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteCategory(id) {
    axios.delete('http://localhost:9092/' + id);
    alert('삭제되었습니다.');
    setChange((change) => (change += 1));
  }
  // 데이터 안옴
  if (categoryResponse === []) return <CategoryWrapper></CategoryWrapper>;
  return (
    <>
      <CategoryWrapper>
        {categoryResponse.map((categoryItem) => {
          // 배열 원소마다 CategoryBtn을 생성
          return (
            <CategoryBtn key={categoryItem.categoryId}>
              {categoryItem.categoryTitle}
              <TrashLogo
                src={trashLogo}
                alt="trash"
                onClick={() => deleteCategory(categoryItem.categoryId)}
              />
            </CategoryBtn>
          );
        })}
      </CategoryWrapper>

      <NewCategoryBtn onClick={handleModal}>+ New Category</NewCategoryBtn>
      {isOpen ? (
        <ModalBackdrop>
          <ModalView>
            <CloseBtn onClick={handleModal}>&times;</CloseBtn>
            <CategoryTag> New Category</CategoryTag>
            <CategoryInput
              placeholder={'Category Name'}
              value={input ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
              type={'text'}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행
            ></CategoryInput>
            <br />
            <br />
            <CreateBtn onClick={postCategoryApi}>확인</CreateBtn>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};

export default Category;
