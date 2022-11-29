import React, { useEffect } from 'react';
import { TopMenuBtn, TopMenuWrapper } from './styled.js';
import { NavLink } from 'react-router-dom';
import {
  allLogo,
  weekLogo,
  starLogo,
  todayLogo,
} from '../../../assets/menuSvg/ExportSvg';

const TopMenu = () => {
  useEffect(() => {
    // 처음 실행 화면 => today 페이지 출력
    document.getElementById('Today').click();
    return () => {};
  }, []);

  function activeColor(elmnt, cnum) {
    var i, navbtns, active;
    var pallet = ['#D2A7A7', '#EBD49A', '#a0cdb2', '#a1c2cf'];
    navbtns = document.getElementsByClassName('navbtn');
    active = document.getElementById(elmnt);

    for (i = 0; i < navbtns.length; i++) {
      // active가 아닌 것들 초기화
      navbtns[i].style.backgroundColor = '';
      navbtns[i].style.color = 'white';
    }

    active.style.backgroundColor = pallet[cnum]; // active인 것(클릭된 것) 색 변경
    active.style.color = 'black';
  }
  return (
    <TopMenuWrapper>
      <NavLink to="/">
        <TopMenuBtn
          className="navbtn"
          id="Today"
          onClick={() => activeColor('Today', 0)}
        >
          <img src={todayLogo} alt="today" /> &nbsp;&nbsp;&nbsp;&nbsp;Today
        </TopMenuBtn>
      </NavLink>
      <br />
      <NavLink to="/week">
        <TopMenuBtn
          className="navbtn"
          id="Week"
          onClick={() => activeColor('Week', 1)}
        >
          <img src={weekLogo} alt="week" /> &nbsp;&nbsp;&nbsp;&nbsp;Week
        </TopMenuBtn>
      </NavLink>
      <NavLink to="/all">
        <TopMenuBtn
          className="navbtn"
          id="All"
          onClick={() => activeColor('All', 2)}
        >
          <img src={allLogo} alt="all" /> &nbsp;&nbsp;&nbsp;&nbsp;All
        </TopMenuBtn>
      </NavLink>
      <NavLink to="/star">
        <TopMenuBtn
          className="navbtn"
          id="Star"
          onClick={() => activeColor('Star', 3)}
        >
          <img src={starLogo} alt="star" /> &nbsp;&nbsp;&nbsp;&nbsp;Star
        </TopMenuBtn>
      </NavLink>
    </TopMenuWrapper>
  );
};

export default TopMenu;
