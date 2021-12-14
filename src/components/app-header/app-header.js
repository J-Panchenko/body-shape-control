import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './app-header.css';

function AppHeader() {
  return (
    <nav className="menu container">
      <Link to="/" className="menu__link-home">Body Shape Control</Link>
      <ul className="menu__list">
        <li className="menu__item"><NavLink to="calculator" className="menu__link">Calorie calculator</NavLink></li>
        <li className="menu__item"><NavLink to="meal-plan" className="menu__link">Daily meal plan</NavLink></li>
        <li className="menu__item"><NavLink to="water" className="menu__link">Daily water goal</NavLink></li>
      </ul>
    </nav>
  );
}

export default AppHeader;
