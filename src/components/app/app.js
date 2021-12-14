import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout';
import Calculator from '../pages/calculator';
import DailyMealPlan from '../pages/meal';
import DailyWaterGoal from '../pages/water';
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
