import styled from 'styled-components';

//Title.js
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 10px 0px;
  background-color: black;
  width: 200px;
  height: 40px;
`;
export const TitleLogo = styled.img`
  margin-left: 5px;
  width: 30px;
`;
export const TitleName = styled.div`
  margin: 10px 5px;
  font-family: SeoulHangang, sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: white;
`;

//TopMenu
export const TopMenuWrapper = styled.div`
  background-color: black;
  width: 200px;
`;
export const TopMenuBtn = styled.button`
  width: 200px;
  height: 45px;
  font-size: 16px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  padding: 14px 16px;
  font-family: 'SeoulHangang', sans-serif;
  padding: 14px 16px 14px 30px;
  text-align: left;
`;
//TopMenuImg, TopmenuName도 하기..?
