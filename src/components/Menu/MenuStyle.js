import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px 100px 100px 100px;
  background-color: #3F3D38;
  display: flex;
  width: 900px;
  height: 600px;
`;


//메뉴

export const TodoMenuWrapper = styled.div`
  width: 300px;
  height: 600px;
  background-color: #000;
`;

export const TopMenuWrapper = styled.div`
  
`;

//타이틀(로고, 제목)
export const TitleWrapper = styled.div`
  display: flex;
  gap: 1px;
  //padding: 5px;
  padding-bottom: 15px;
  :hover{
    background-color: #D2A7A7;
  }
`;
export const TitleLogo = styled.img`
  margin: 15px 0 0 20px;
`;
export const TitleName = styled.div`
  margin: 22px 15px 0 15px;
  font-family: SeoulHangang, sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
`;

//Today
export const TodayWrapper = styled.div`
  display: flex;
  gap: 1px;
  padding: 20px;
  :hover{
    background-color: #a0cdb2;
  }
`;
export const TodayLogo = styled.img`
  
`;
export const TodayName = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
`;

//Week
export const WeekWrapper = styled.div`
  display: flex;
  gap: 1px;
  padding: 20px;
  :hover{
    background-color: #a0cdb2;
  }
`;
export const WeekLogo = styled.img`
  
`;
export const WeekName = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
`;

//All
export const AllWrapper = styled.div`
  display: flex;
  gap: 1px;
  padding: 20px;
  :hover{
    background-color: #a0cdb2;
  }
`;
export const AllLogo = styled.img`
  
`;
export const AllName = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
`;

//Star
export const StarWrapper = styled.div`
  display: flex;
  gap: 1px;
  padding: 20px;
  :hover{
    background-color: #a0cdb2;
  }
`;
export const StarLogo = styled.img`
  
`;
export const StarName = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
`;


//투두리스트
export const TodoListWrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: #a0cdb2;
`;

//날짜
export const DateWrapper = styled.div`
  display: flex;
  margin: 70px 0 20px 70px;
`;

export const Date = styled.div`
  font-family: SeoulHangang, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #212121;
`;

export const DateImgL = styled.img`
  margin-right: 20px;
`;
export const DateImgR = styled.img`
  rotate: 180deg;
  margin-left: 20px;
`;

//리스트
export const ListWrapper = styled.div`

`;

export const TodoWrapper = styled.div`
  background-color: #212121;
  border-radius: 8px;
  width: 450px;
  height: 60px;
  margin: 10px auto;
  
`;

//인풋
export const AddWrapper = styled.div`
  margin: 195px auto 10px auto;
  display: flex;
`;

export const AddInPutWrapper = styled.div`
  display: flex;
  background-color: #212121;
  width: 380px;
  height: 40px;
  border-radius: 5px;
  padding: 7px 15px;
  margin: 0 15px 0 65px;
`;

export const AddInput = styled.input`
  width: 340px;
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

export const CalendarImg = styled.img`
  width: 20px;
`;

export const AddBtn = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  font-size: 40px;
 
  background-color: #4B725F;
`;