import React, { useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Today from "./components/Today"
import Week from "./components/Week";
import All from './components/All';
import Star from './components/Star';
import {logo, allsvg, weeksvg, starsvg, todaysvg} from './imgs/ExportSvg';

const App = () => {

  useEffect(() => { // 처음 실행 화면 => today 페이지 출력
    document.getElementById('Today').click();
    return () => {};
  }, []);


  function activeColor(elmnt, cnum) {
    var i, navbtns, active;
    var pallet = ["#D2A7A7", "#EBD49A", "#a0cdb2", "#a1c2cf"]
    navbtns = document.getElementsByClassName("navbtn");
    active = document.getElementById(elmnt);

    for (i = 0; i < navbtns.length; i++) {   // active가 아닌 것들 초기화
      navbtns[i].style.backgroundColor = "";
      navbtns[i].style.color = "white";
    }

    active.style.backgroundColor = pallet[cnum];  // active인 것(클릭된 것) 색 변경
    active.style.color = "black"
  }
  
  

  return (
    <div className='todo'>

      {/*왼쪽 검은부분*/}
      <div> 
        <div className="title">
          <img src={logo} width='37px'/> &nbsp;Today's croffle</div>
        <div className="Navbar">
          <NavLink to="/" >
            <button className='navbtn' id="Today" onClick={() => activeColor('Today', 0)}>
              <img src={todaysvg} /> &nbsp;&nbsp;&nbsp;&nbsp;Today</button>
          </NavLink><br/>
          <NavLink to="/week" >
            <button className='navbtn' id="Week" onClick={() => activeColor('Week', 1)}>
              <img src={weeksvg} /> &nbsp;&nbsp;&nbsp;&nbsp;Week</button>
          </NavLink>
          <NavLink to="/all" >
            <button className='navbtn' id="All" onClick={() => activeColor('All', 2)}>
              <img src={allsvg}/> &nbsp;&nbsp;&nbsp;&nbsp;All</button>
          </NavLink>
          <NavLink to="/star" >
            <button className='navbtn' id="Star" onClick={() => activeColor('Star', 3)}>
              <img src={starsvg} /> &nbsp;&nbsp;&nbsp;&nbsp;Star</button>
          </NavLink>
        </div>
      </div>

      {/*오른쪽*/}
      <Routes>
        <Route exact path="/" element={<Today />} />
        <Route path="/week" element={<Week />} />
        <Route path='/all' element={<All />} />
        <Route path='/star' element={<Star />}/>
      </Routes>

    </div>
  );
};

export default App;
