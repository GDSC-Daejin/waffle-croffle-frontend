import styled from 'styled-components';

export const AddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddInPutWrapper = styled.div`
  display: flex;
  background-color: #212121;
  width: 380px;
  height: 40px;
  border-radius: 5px;
  padding: 7px 15px;
  margin: 0px 10px;
`;

export const AddInput = styled.input`
  width: 330px;
  background-color: #212121;
  color: #eeeeee;
  outline: none;
  border: 0;
  font-size: 13px;
`;

export const CategoryImg = styled.img`
  width: 14px;
  padding: 0px 5px;
  margin-left: 20px;
`;

// 스타일 더 추가하기 (할 수 있다면,,)
export const Select = styled.select`
  height: 35px;
  background: #212121;
  color: white;
  font-size: 13px;
  border: none;
  margin-top: 2px;
  
  option {
    color: white
    background: #212121;
    display: flex;
    white-space: pre; 
    min-height: 20px;
  }
`;

export const AddBtn = styled.button`
  background-color: #4b725f;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  font-size: 40px;
  text-align: center;
  line-height: 42px;
`;
