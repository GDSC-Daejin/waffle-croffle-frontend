import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Today from './pages/Today';
import Week from './pages/Week';
import All from './pages/All';
import Star from './pages/Star';

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
