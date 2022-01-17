import React, { Component } from 'react';
import { scroller } from 'react-scroll';

import './calculator-result.css';

import user from '../../../../constants';

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
    const units = ' kcal/day';

    return (
      <div className="calculator-result">
        <h2 className="subtitle">Your Results</h2>
        <ul className="calculator-result__list">
          <li className="calculator-result__item">
            <p>maintain weight</p>
            <span className="calorie-value">
              {maintainWeight}
              <span className="calorie-units">{units}</span>
            </span>
          </li>
          <li className="calculator-result__item">
            <p>mild weight loss</p>
            <span className="calorie-value">
              {normalWeightLoss}
              <span className="calorie-units">{units}</span>
            </span>
          </li>
          <li className="calculator-result__item">
            <p>rapid weight loss</p>
            <span className="calorie-value">
              {extremeWeightLoss}
              <span className="calorie-units">{units}</span>
            </span>
          </li>
          <li className="calculator-result__item">
            <p>safely weight gain</p>
            <span className="calorie-value">
              {normalWeightGain}
              <span className="calorie-units">{units}</span>
            </span>
          </li>
          <li className="calculator-result__item">
            <p>fast weight gain</p>
            <span className="calorie-value">
              {extremeWeightGain}
              <span className="calorie-units">{units}</span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
