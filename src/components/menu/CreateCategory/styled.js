import styled from 'styled-components';

export const NewCategoryBtn = styled.button`
  width: 200px;
  height: 40px;
  font-family: SeoulHangang, sans-serif;
  font-size: 17px;
  color: white;
  background-color: gray;
  text-align: center;
  float: bottom;
`;

export const ModalView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 250px;
  background-color: #f6cfa1;
  border-radius: 10px;
  padding: 20px;
  z-index: 1;
`;
export const CloseBtn = styled.div`
  cursor: pointer;
  float: right;
  font-size: 25px;
  padding: 2px 5px;
  border-radius: 50%;
`;
export const CategoryTag = styled.div`
  margin-top: 27px;
`;
export const CategoryInput = styled.input`
  background-color: #f6cfa1;
  color: #181818;
  outline: none;
  border: 0;
  font-size: 21px;
  border-bottom: solid;
  width: 75%;
  margin-top: 10px;
`;
export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
