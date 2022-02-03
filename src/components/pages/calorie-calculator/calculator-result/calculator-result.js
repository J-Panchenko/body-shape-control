import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { connect } from 'react-redux';
import { getUserCalories } from '../../../../actions';
import './calculator-result.css';
import texts from '../../../../data/texts';
import MealPlan from '../../meal-plan';

class CalculatorResult extends Component {
  componentDidMount() {
    scroller.scrollTo('calculator-result', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  render() {
    const {
      onSelectedCalories, userSelectedCalories, maintainWeight,
      normalWeightLoss, extremeWeightLoss, normalWeightGain, extremeWeightGain,
    } = this.props;
    const units = ' kcal/day';

    return (
      <div className="calculator-result">
        <div className="section-container">
          <h2 className="subtitle">Results</h2>
          <p className="calculator-result__result-msg">
            {texts.caloriesResult[0]}
            <span className="calculator-result__result-value">
              {(!userSelectedCalories) ? 0 : userSelectedCalories}
            </span>
            <span className="calorie-units">{units}</span>
          </p>
          <p className="calculator-result__help-msg">
            {texts.caloriesResult[1]}
            <Link to="/meal-plan" element={<MealPlan />}>{texts.caloriesResult[2]}</Link>
          </p>
          <ul className="calculator-result__list">
            <li className="calculator-result__item">
              <p>Maintain weight</p>
              <button type="button" className="calorie-value" onClick={() => onSelectedCalories(maintainWeight)}>
                {maintainWeight}
                <span className="calorie-units">{units}</span>
              </button>
            </li>
            <li className="calculator-result__item">
              <p>Mild weight loss</p>
              <button type="button" className="calorie-value" onClick={() => onSelectedCalories(normalWeightLoss)}>
                {normalWeightLoss}
                <span className="calorie-units">{units}</span>
              </button>
            </li>
            <li className="calculator-result__item">
              <p>Rapid weight loss</p>
              <button type="button" className="calorie-value" onClick={() => onSelectedCalories(extremeWeightLoss)}>
                {extremeWeightLoss}
                <span className="calorie-units">{units}</span>
              </button>
            </li>
            <li className="calculator-result__item">
              <p>Safely weight gain</p>
              <button type="button" className="calorie-value" onClick={() => onSelectedCalories(normalWeightGain)}>
                {normalWeightGain}
                <span className="calorie-units">{units}</span>
              </button>
            </li>
            <li className="calculator-result__item">
              <p>Fast weight gain</p>
              <button type="button" className="calorie-value" onClick={() => onSelectedCalories(extremeWeightGain)}>
                {extremeWeightGain}
                <span className="calorie-units">{units}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  userCalories, maintainWeight, normalWeightLoss, extremeWeightLoss,
  normalWeightGain, extremeWeightGain,
}) => ({
  userSelectedCalories: userCalories,
  maintainWeight,
  normalWeightLoss,
  extremeWeightLoss,
  normalWeightGain,
  extremeWeightGain,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectedCalories: (value) => dispatch(getUserCalories(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorResult);
