import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryWrapper, CategoryBtn, TrashLogo } from './styled.js';
import { trashLogo } from '../../../assets/menuSvg/ExportSvg.js';

const Category = () => {
  const [get, setGet] = useState([]);

  const mouseOver = (e) => {
    e.target.style.visibility = 'visible';
  };

  useEffect(() => {
    getCategory();
    return () => {};
  }, []);

  async function getCategory() {
    try {
      const response = await axios.get('http://localhost:9092/');
      setGet(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function deleteCategory(id) {
    axios.delete('http://localhost:9092/' + id);
    getCategory();
  }

  return (
    <CategoryWrapper>
      {get.map((todo) => {
        return (
          <CategoryBtn key={todo.categoryId} onMouseOver={mouseOver}>
            {todo.categoryTitle}
            <TrashLogo
              src={trashLogo}
              alt="trash"
              onClick={() => deleteCategory(todo.categoryId)}
            />
          </CategoryBtn>
        );
      })}
    </CategoryWrapper>
  );
};

export default Category;
