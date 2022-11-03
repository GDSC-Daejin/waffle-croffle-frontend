import React from 'react';
import './MenuStyle';
import Logo from '../../assets/투데이로고.svg';
import todayLogo from '../../imgs/today.svg';
import date from '../../imgs/DateImg.svg';
import {
  AddBtn,
  AddInput,
  AddInPutWrapper,
  AddWrapper,
  AllLogo,
  AllName,
  AllWrapper,
  CalendarImg,
  CategoryImg,
  Date,
  DateImg,
  DateImgL, DateImgR,
  DateWrapper,
  ListWrapper,
  StarLogo,
  StarName,
  StarWrapper,
  TitleLogo,
  TitleName,
  TitleWrapper,
  TodayLogo,
  TodayName,
  TodayWrapper,
  TodoListWrapper,
  TodoMenuWrapper,
  TodoWrapper,
  TopMenuWrapper,
  WeekLogo,
  WeekName,
  WeekWrapper,
  Wrapper,
} from './MenuStyle';
import categorysvg from '../../imgs/category.svg';
import weeksvg from '../../imgs/week.svg';


function activeColor(elmnt, cnum) {
  var i, navbtns, active;
  var pallet = ['#D2A7A7', '#EBD49A', '#a0cdb2', '#a1c2cf'];
  navbtns = document.getElementsByClassName('navbtn');
  active = document.getElementById(elmnt);

  for (i = 0; i < navbtns.length; i++) {   // active가 아닌 것들 초기화
    navbtns[i].style.backgroundColor = '';
    navbtns[i].style.color = 'white';
  }

  active.style.backgroundColor = pallet[cnum];  // active인 것(클릭된 것) 색 변경
  active.style.color = 'black';
}

function Menu() {
  return (
    <div>
      <Wrapper>
        <TodoMenuWrapper>
          {/*    <MenuWrapper>*/}
          <TopMenuWrapper>
            <TitleWrapper>
              <TitleLogo src={Logo} />
              <TitleName>
                Today's Croffle
              </TitleName>
            </TitleWrapper>
            <TodayWrapper className='navbtn' id='Today' onClick={() => activeColor('Today', 0)}>
              <TodayLogo src={todayLogo} />
              <TodayName>Today</TodayName>
            </TodayWrapper>
            <WeekWrapper>
              <WeekLogo />
              <WeekName>Week</WeekName>
            </WeekWrapper>
            <AllWrapper>
              <AllLogo />
              <AllName>All</AllName>
            </AllWrapper>
            <StarWrapper>
              <StarLogo />
              <StarName>Star</StarName>
            </StarWrapper>
          </TopMenuWrapper>
          {/*        <UnderMenuWrapper>*/}
          {/*            <CategoryListWrapper>*/}
          {/*            </CategoryListWrapper>*/}
          {/*        </UnderMenuWrapper>*/}
          {/*    </MenuWrapper>*/}
        </TodoMenuWrapper>
        {/*투두리스트*/}
        <TodoListWrapper>
          <DateWrapper>
            <DateImgL src={date} />
            <Date>2022.11.03 목요일</Date>
            <DateImgR src={date} />
          </DateWrapper>
          <ListWrapper>
            <TodoWrapper>
            </TodoWrapper>
            <TodoWrapper>
            </TodoWrapper>
            <TodoWrapper>
            </TodoWrapper>
          </ListWrapper>
          <AddWrapper>
            <AddInPutWrapper>
              <AddInput type='text' placeholder='입려어어억ㄱ' />
              <CategoryImg src={categorysvg} />
              <CalendarImg src={weeksvg} />
            </AddInPutWrapper>
            <AddBtn>+</AddBtn>
          </AddWrapper>
        </TodoListWrapper>
      </Wrapper>
    </div>
  );
}

export default Menu;