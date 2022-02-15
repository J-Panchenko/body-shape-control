import React from 'react';
import CurrentMealPlan from './current-meal-plan';
import texts from '../../../../data/texts';
import './daily-meal-planner.css';
import MealsList from './meals-list';

function DailyMealPlanner() {
  return (
    <section className="daily-meal-planner">
      <CurrentMealPlan />
      <h3 className="section-subtitle">{texts.mealPlanner[1]}</h3>
      <MealsList />
    </section>
  );
}

export default DailyMealPlanner;
