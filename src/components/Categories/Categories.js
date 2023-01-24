import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const disptach = useDispatch();

  const onClickHandler = () => {
    disptach(checkStatus());
  };

  return (
    <div>
      <h2>{categories.categories[0]}</h2>
      <button type="button" onClick={onClickHandler}>Check Status</button>
    </div>
  );
};

export default Categories;
