import styled from 'styled-components';

//날짜
export const DateWrapper = styled.div`
  display: flex;
  margin: 15px;
`;

export const Date = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: bold;
  font-size: 17px;
  color: #212121;
`;

export const DateImgL = styled.img`
  margin-right: 20px;
  :hover {
    color: #212121;
  }
`; //hover 적용이 안됨
export const DateImgR = styled.img`
  rotate: 180deg;
  margin-left: 20px;
`;
