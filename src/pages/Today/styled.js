import styled from 'styled-components';

//날짜
export const DateWrapper = styled.div`
  display: flex;
  margin: 15px;
`;

export const TodayDate = styled.div`
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

//ssssssssssssssssssss 원래 Todo에 있던거

export const TodoWrapper = styled.div`
  display: flex;
  background-color: #212121;
  border-radius: 8px;
  width: 430px;
  height: 52px;
  margin: 10px auto;
  padding: 5px 15px;
  color: white;
  align-items: center;
`;
export const TodoImg = styled.img`
  width: 20px;
  margin: auto 7px;
`;
export const TodoText = styled.div`
  display: block;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.deco};
  margin-left: 7px;
  width: 100%;
`;
export const TodoContent = styled.div`
  font-size: 14px;
  padding-bottom: 3px;
`;
export const TodoCategory = styled.div`
  font-size: 12px;
`;
