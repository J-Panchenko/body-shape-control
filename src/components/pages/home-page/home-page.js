import React from 'react';
import { Link } from 'react-router-dom';
import { texts } from '../../../data';
import { imgHeart } from '../../../images';
import './home-page.css';

const HomePage = () => (
  <section className="home">
    <h2 className="section-title visually-hidden">Welcome To Body Shape Control</h2>
    <div className="section-container">
      <h3 className="section-subtitle">Body Shape Control</h3>
      <p className="section-content-text">{texts.homePage.introduction}</p>
      <p className="section-content-text">
        <Link to="/calorie-calculator" data-title="Recommended to start with">
          {texts.homePage.calories.link}
        </Link>
        {texts.homePage.calories.text}
      </p>
      <p className="section-content-text">
        <Link to="/meal-plan">
          {texts.homePage.meals.link}
        </Link>
        {texts.homePage.meals.text}
      </p>
      <p className="section-content-text">
        {texts.homePage.water.text}
        <Link to="/water-goal">
          {texts.homePage.water.link}
        </Link>
      </p>
      <p className="section-content-text">
        {texts.homePage.conclusion}
        <img src={imgHeart} width="50px" height="50px" alt="Heart" />
      </p>
    </div>
  </section>
);

export default HomePage;
