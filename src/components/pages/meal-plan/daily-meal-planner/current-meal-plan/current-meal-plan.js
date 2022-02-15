import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { texts } from '../../../../../data';
import './current-meal-plan.css';

function CurrentMealPlan() {
  const [currentValues, setCurrentValues] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    kcal: 0,
  });
  const currentSum = useSelector(({ meals }) => meals.currentSum);
  const {
    carbs = 0, protein = 0, fat = 0, kcal = 0,
  } = currentSum;

  useEffect(() => {
    setCurrentValues({
      carbs, protein, fat, kcal,
    });
  }, [carbs, protein, fat, kcal]);

  return (
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
              {currentValues.carbs}
              {' '}
              <span> g</span>
            </td>
            <td className="table-data">
              {currentValues.protein}
              {' '}
              <span>g</span>
            </td>
            <td className="table-data">
              {currentValues.fat}
              {' '}
              <span> g</span>
            </td>
            <td className="table-data">
              {currentValues.kcal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrentMealPlan;
