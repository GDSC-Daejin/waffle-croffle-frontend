import styled from 'styled-components';

//날짜
export const DateWrapper = styled.div`
  display: flex;
  margin: 20px;
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

// Page
export const PageWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 30px 50px;
  background-color: #cccccc;
`;
// Page별 배경 색상 정하기
export const TodayPageWrapper = styled(PageWrapper)`
  background-color: #d2a7a7;
`;
export const WeekPageWrapper = styled(PageWrapper)`
  background-color: #ebd49a;
`;
export const AllPageWrapper = styled(PageWrapper)`
  background-color: #a0cdb2;
`;
export const StarPageWrapper = styled(PageWrapper)`
  background-color: #a1c2cf;
`;

// TodoList
export const ListWrapper = styled.div`
  height: 340px;
  margin: 10px;
`;
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

// Add.js
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
  margin-right: 17px;
`;

export const CalenderImg = styled.img`
  width: 20px;
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
