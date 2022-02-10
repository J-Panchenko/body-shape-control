import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { energyValue } from '../../../../../constants';
import './meal-calculator-result.css';

const MealCalculatorResult = ({ ...props }) => {
  const {
    calories, protein, fat, carbo,
  } = props;

  useEffect(() => {
    scroller.scrollTo('table', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, [protein, fat, carbo]);

  const proteinGramGoal = Math.round((calories * protein) / energyValue.protein);
  const fatGramGoal = Math.round((calories * fat) / energyValue.fat);
  const carbsGramGoal = Math.round((calories * carbo) / energyValue.carb);

  return (
    <table className="table">
      <caption className="table-cap">Your Daily Meal Goal</caption>
      <tbody className="table-body">
        <tr className="table-row">
          <th className="table-head">carbs</th>
          <th className="table-head">protein</th>
          <th className="table-head">fat</th>
          <th className="table-head">calories</th>
        </tr>
        <tr className="table-row">
          <td className="table-data">
            {carbsGramGoal}
            {' '}
            <span> g</span>
          </td>
          <td className="table-data">
            {proteinGramGoal}
            {' '}
            <span> g</span>
          </td>
          <td className="table-data">
            {fatGramGoal}
            {' '}
            <span> g</span>
          </td>
          <td className="table-data">
            {calories}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MealCalculatorResult;
