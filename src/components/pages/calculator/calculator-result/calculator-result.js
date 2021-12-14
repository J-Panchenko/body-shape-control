import React, { Component } from 'react';
import { scroller } from 'react-scroll';

import './calculator-result.css';

import user from '../../../../constants/user';

export default class CalculatorResult extends Component {
  componentDidMount() {
    scroller.scrollTo('calculator-result', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  render() {
    const { maintainWeight } = this.props;
    const normalWeightLoss = Math.round(maintainWeight * user.targetCalories.forNormalWeightLoss);
    const extremeWeightLoss = Math.round(maintainWeight * user.targetCalories.forExtremeWeightLoss);
    const normalWeightGain = Math.round(maintainWeight * user.targetCalories.forNormalWeightGain);
    const extremeWeightGain = Math.round(maintainWeight * user.targetCalories.forExtremeWeightGain);
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
}
