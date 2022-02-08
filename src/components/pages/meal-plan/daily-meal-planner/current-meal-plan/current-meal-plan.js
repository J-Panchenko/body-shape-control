import React from 'react';
import { texts } from '../../../../../data';
import './current-meal-plan.css';

const CurrentMealPlan = ({
  currentCarbsGram, currentProteinGram, currentFatGram, currentCalories,
}) => (
  <div className="current-meal-plan">
    <table className="table">
      <caption className="table-cap current-cap">{texts.mealPlanner[0]}</caption>
      <tbody className="table-body">
        <tr className="table-row">
          <th className="table-head">carbs</th>
          <th className="table-head">protein</th>
          <th className="table-head">fat</th>
          <th className="table-head">calories</th>
        </tr>
        <tr className="table-row">
          <td className="table-data">
            {currentCarbsGram}
            {' '}
            <span> g</span>
          </td>
          <td className="table-data">
            {currentProteinGram}
            {' '}
            <span>g</span>
          </td>
          <td className="table-data">
            {currentFatGram}
            {' '}
            <span> g</span>
          </td>
          <td className="table-data">
            {currentCalories}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CurrentMealPlan;
