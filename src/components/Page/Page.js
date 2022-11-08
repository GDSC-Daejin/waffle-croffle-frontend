import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Today from './Pages/Today';
import Week from './Pages/Week';
import All from './Pages/All';
import Star from './Pages/Star';

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Today />} />
      <Route path="/week" element={<Week />} />
      <Route path="/all" element={<All />} />
      <Route path="/star" element={<Star />} />
    </Routes>
  );
};

export default Page;
