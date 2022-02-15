import React from 'react';
import './meal-plan.css';

import MealCalculator from './meal-calculator';
import texts from '../../../data/texts';
import DailyMealPlanner from './daily-meal-planner/daily-meal-planner';

const MealPlan = () => (
  <section>
    <h2 className="section-title visually-hidden">Your Daily Meal Plan</h2>
    <div className="section-container">
      <p className="section-text">{texts.prefaceMealPlan[0]}</p>
      <p className="section-text">{texts.prefaceMealPlan[1]}</p>
      <MealCalculator />
      <DailyMealPlanner />
    </div>
  </section>
);

export default MealPlan;
