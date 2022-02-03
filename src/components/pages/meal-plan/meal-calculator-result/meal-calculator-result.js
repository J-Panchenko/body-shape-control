import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { energyValue } from '../../../../constants';
import './meal-calculator-result.css';

const MealCalculatorResult = ({ ...props }) => {
  const {
    calories, protein, fat, carbo,
  } = props;

  useEffect(() => {
    scroller.scrollTo('daily-meal-goal__table', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, [calories, protein, fat, carbo]);

  const proteinGramGoal = Math.round((calories * protein) / energyValue.protein);
  const fatGramGoal = Math.round((calories * fat) / energyValue.fat);
  const carbsGramGoal = Math.round((calories * carbo) / energyValue.carb);

  return (
    <table className="daily-meal-goal__table">
      <caption className="daily-meal-goal__table-cap">Your Daily Meal Goal</caption>
      <tr className="daily-meal-goal__table-row">
        <th className="daily-meal-goal__table-head">carbs</th>
        <th className="daily-meal-goal__table-head">protein</th>
        <th className="daily-meal-goal__table-head">fat</th>
        <th className="daily-meal-goal__table-head">calories</th>
      </tr>
      <tr className="daily-meal-goal__table-row">
        <td className="daily-meal-goal__table-data">
          {carbsGramGoal}
          {' '}
          <span> g</span>
        </td>
        <td className="daily-meal-goal__table-data">
          {proteinGramGoal}
          {' '}
          <span>g</span>
        </td>
        <td className="daily-meal-goal__table-data">
          {fatGramGoal}
          {' '}
          <span> g</span>
        </td>
        <td className="daily-meal-goal__table-data">
          {calories}
        </td>
      </tr>
    </table>
  );
};

export default MealCalculatorResult;
