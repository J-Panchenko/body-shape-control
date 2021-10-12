import React from 'react';

import './calculator-result.css';

import user from '../../constants/user';

function CalculatorResult(props) {
  const { value } = props;

  const maintainWeight = value;
  const normalWeightLoss = Math.round(value * user.targetCalories.forNormalWeightLoss);
  const extremeWeightLoss = Math.round(value * user.targetCalories.forExtremeWeightLoss);
  const normalWeightGain = Math.round(value * user.targetCalories.forNormalWeightGain);
  const extremeWeightGain = Math.round(value * user.targetCalories.forExtremeWeightGain);
  const units = ' ккал/день';

  return (
    <div className="calculator-result">
      <h2 className="subtitle">Ваша норма</h2>
      <ul className="calculator-result__list">
        <li className="calculator-result__item">
          <p>для поддержания веса</p>
          <span className="calorie-value">{maintainWeight}</span>
          <span className="calorie-units">{units}</span>
        </li>
        <li className="calculator-result__item">
          <p>для безопасного похудения</p>
          <span className="calorie-value">{normalWeightLoss}</span>
          <span className="calorie-units">{units}</span>
        </li>
        <li className="calculator-result__item">
          <p>для быстрого похудения</p>
          <span className="calorie-value">{extremeWeightLoss}</span>
          <span className="calorie-units">{units}</span>
        </li>
        <li className="calculator-result__item">
          <p>для безопасного набора веса</p>
          <span className="calorie-value">{normalWeightGain}</span>
          <span className="calorie-units">{units}</span>
        </li>
        <li className="calculator-result__item">
          <p>для быстрого набора веса</p>
          <span className="calorie-value">{extremeWeightGain}</span>
          <span className="calorie-units">{units}</span>
        </li>
      </ul>
    </div>
  );
}

export default CalculatorResult;
