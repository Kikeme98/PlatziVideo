import React from 'react';
import '../assets/styles/components/Categories.scss'
const Categories = ({children, text}) => {
  return(
    <div className="categories">
      <h3 className="categories__title">{text}</h3>
      {children}
    </div>
  )
};

export default Categories;