import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Today from "./components/Today"
import Week from "./components/Week";


const App = () => {

  return (
    <div className='todo'>

      <div> 
        <div className="title">Today's croffle</div>
        <div className="Navbar">
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'pink' : 'white' })}>
            <button className='navbtn' id="defaultOpen" onClick={activeColor('#D2A7A7')}>Today</button>
          </NavLink><br/>
          <NavLink to="/week" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <button className='navbtn' onClick={activeColor('#EBD49A')}>Week</button>
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Today />} />
        <Route path="/week" element={<Week />} />
      </Routes>
      
    </div>
    
  );
};

export default App;
