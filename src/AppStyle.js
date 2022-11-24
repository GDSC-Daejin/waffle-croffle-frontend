import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-item: center;
    justify-content: center;
    background-color: #3f3d38;
    width: 100%;
    height: 100%;
    margin: 0;
  }

`;

export const TodaysCroffle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  height: 560px;
  justify-content: center;
  align-item: center;
  align-self: center;
`;

export const MenuWapper = styled.div`
  width: 200px;
  height: 560px;
  background-color: black;
`;
