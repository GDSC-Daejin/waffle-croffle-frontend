import React, { useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Today from "./components/Today"
import Week from "./components/Week";
import All from './components/All';
import Star from './components/Star';

const App = () => {

  useEffect(() => {
    document.getElementById('Today').click();
    return () => {};
  }, []);


  function activeColor(elmnt, cnum) {
    var i, navbtns, active;
    var pallet = ["#D2A7A7", "#EBD49A", "#a0cdb2", "#7DAABD"]
    navbtns = document.getElementsByClassName("navbtn");
    active = document.getElementById(elmnt);

    for (i = 0; i < navbtns.length; i++) {
      navbtns[i].style.backgroundColor = "";
      navbtns[i].style.color = "white";
    }

    active.style.backgroundColor = pallet[cnum];
    active.style.color = "black"
  }
  
  

  return (
    <div className='todo'>

      {/*왼쪽 검은부분*/}
      <div> 
        <div className="title">
          Today's croffle</div>
        <div className="Navbar">
          <NavLink to="/" >
            <button className='navbtn' id="Today" onClick={() => activeColor('Today', 0)}>Today</button>
          </NavLink><br/>
          <NavLink to="/week" >
            <button className='navbtn' id="Week" onClick={() => activeColor('Week', 1)}>Week</button>
          </NavLink>
          <NavLink to="/all" >
            <button className='navbtn' id="All" onClick={() => activeColor('All', 2)}>All</button>
          </NavLink>
          <NavLink to="/star" >
            <button className='navbtn' id="Star" onClick={() => activeColor('Star', 3)}>Star</button>
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
