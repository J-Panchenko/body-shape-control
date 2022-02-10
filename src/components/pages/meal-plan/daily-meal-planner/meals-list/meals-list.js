import React from 'react';
import Breakfast from './breakfast';
import './meals-list.css';

const MealsList = () => {
  const key = Math.floor(Math.random() * 8) + 2;
  return (
    <ul className="meals">
      <li key={key} className="meals__item"><Breakfast /></li>
    </ul>
  );
};
export default MealsList;
