import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout';
import Calculator from '../pages/calorie-calculator';
import MealPlan from '../pages/meal-plan';
import DailyWaterGoal from '../pages/water-goal';
import HomePage from '../pages/home-page';

import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="calorie-calculator" element={<Calculator />} />
        <Route path="meal-plan" element={<MealPlan />} />
        <Route path="water-goal" element={<DailyWaterGoal />} />
      </Route>
    </Routes>
  );
}

export default App;
