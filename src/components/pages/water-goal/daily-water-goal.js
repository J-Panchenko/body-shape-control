import React from 'react';
import WaterGoalCalculator from './water-goal-calculator';
import './daily-water-goal.css';
import { texts } from '../../../data';

function DailyWaterGoal() {
  return (
    <section>
      <h2 className="section-title visually-hidden">Your daily water goal</h2>
      <div className="section-container">
        <p className="section-text">{texts.prefaceWaterGoal[0]}</p>
        <p className="section-text">{texts.prefaceWaterGoal[1]}</p>
        <WaterGoalCalculator />
      </div>
    </section>
  );
}
export default DailyWaterGoal;
