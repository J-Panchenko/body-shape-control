import React from 'react';
import Breakfast from './breakfast';
import './meals-list.css';

const MealsList = () => (
  <ul className="meals">
    <li className="meals__item"><Breakfast /></li>
  </ul>
);

export default MealsList;
