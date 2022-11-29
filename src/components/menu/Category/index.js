import React from 'react';
import axios from 'axios';
import { CategoryWrapper, CategoryBtn } from './styled.js';

const Week = () => {
  async function getCategory() {
    try {
      const response = await axios.get('http://localhost:9092/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <CategoryWrapper>
      <CategoryBtn>dkdk</CategoryBtn>
      <CategoryBtn>아아아</CategoryBtn>
    </CategoryWrapper>
  );
};

export default Week;
