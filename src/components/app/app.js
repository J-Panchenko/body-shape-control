import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout';
import Calculator from '../pages/calorie-calculator';
import DailyMealPlan from '../pages/meal-plan';
import DailyWaterGoal from '../pages/water-goal';
import HomePage from '../pages/home';

import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="meal-plan" element={<DailyMealPlan />} />
        <Route path="water" element={<DailyWaterGoal />} />
      </Route>
    </Routes>
  );
}

export default App;
