import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { category } from './const';

function Category({ selectedCategoryHandler }) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    selectedCategoryHandler(categoryName);
    navigate('/');
  };

  return (
    <>
      <div className='flex gap-2 justify-center p-2 overflow-x-auto scrollbar-hidden'>
        {category.map(item => (
          <button
            key={item.name}
            onClick={() => handleCategoryClick(item.name)}  // handleCategoryClick chaqiramiz
            type="button"
            className="flex items-center gap-1 text-white bg-[#383636]  font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2"
          >

            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default Category;
