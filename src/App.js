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
          <li>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'pink' : 'white' })}>Today</NavLink>
          </li>
          <li>
            <NavLink to="/week" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Week</NavLink>
          </li>
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
