import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  width: 197px;
  height: 270px;
  max-height: 270px;
  overflow-y: auto;
  //::-webkit-scrollbar {
  //  display: none /* Chrome , Safari , Opera */
  //}
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: rgba(102, 102, 102, 1); /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(65, 65, 65, 0.5);
    border-radius: 11px;
  }
`;
export const CategoryBtn = styled.button`
  width: 180px;
  height: 45px;
  font-size: 16px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-family: 'SeoulHangang', sans-serif;
  padding: 14px 16px 14px 30px;
  text-align: left;
`;
export const TrashLogo = styled.img`
  float: left;
  cursor: default;
  margin-right: 25px;
`;

// createCategory style
export const NewCategoryBtn = styled.button`
  width: 200px;
  height: 40px;
  font-family: SeoulHangang, sans-serif;
  font-size: 17px;
  color: white;
  background-color: black;
  text-align: center;
  float: bottom;
  margin-top: 7px;
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
export const CreateBtn = styled.button`
  color: white;
  background-color: #212121;
  width: 70px;
  height: 32px;
  float: right;
  border-radius: 3px;
  outline: none;
  border: 0;
`;
