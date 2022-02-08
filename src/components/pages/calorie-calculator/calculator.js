import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserWeight, getUserAge,
  getExtremeWeightGain, getExtremeWeightLoss, getMaintainWeight,
  getNormalWeightGain, getNormalWeightLoss, onClearCalorieCalculator,
} from '../../../actions';
import Activity from './activity';
import Age from './age';
import Gender from './gender';
import Height from './height';
import Weight from './weight';
import CalculatorResult from './calculator-result';

import './calculator.css';
import activities from '../../../data/activities';
import {
  calculateMetabolism, normalWeightLoss, extremeWeightLoss, normalWeightGain, extremeWeightGain,
} from '../../../models';

const initialState = {
  gender: '',
  height: '',
  activity: activities,
  activityValue: '',
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  }

  onHeightChange = (event) => {
    this.setState({
      height: parseFloat(event.target.value),
    });
  }

  onActivityChange = (event) => {
    this.setState({
      activityValue: parseFloat(event.target.value),
    });
  }

  onCalculatorResult = (event) => {
    event.preventDefault();
    const { gender, height, activityValue } = this.state;
    const {
      age, weight, forMaintainWeight, forNormalWeightLoss, forExtremeWeightLoss,
      forNormalWeightGain, forExtremeWeightGain,
    } = this.props;

    const metabolism = calculateMetabolism(gender, age, height, weight, activityValue);
    const normalLoss = normalWeightLoss(metabolism);
    const extremeLoss = extremeWeightLoss(metabolism);
    const normalGain = normalWeightGain(metabolism);
    const extremeGain = extremeWeightGain(metabolism);

    forMaintainWeight(metabolism);
    forNormalWeightLoss(normalLoss);
    forExtremeWeightLoss(extremeLoss);
    forNormalWeightGain(normalGain);
    forExtremeWeightGain(extremeGain);
  }

  onClearCalculator = () => {
    const { onClearData } = this.props;
    this.setState(initialState);
    onClearData();
  }

  render() {
    const {
      gender, height, activity, activityValue,
    } = this.state;
    const {
      age, weight, onAgeChange, onWeightChange, userSelectedCalories, maintainWeight,
    } = this.props;

    return (
      <section>
        <h2 className="section-title visually-hidden">
          Calorie Calculator
        </h2>
        <form className="section-container" onSubmit={this.onCalculatorResult}>
          <Gender
            value={gender}
            onGenderChange={this.onGenderChange}
          />
          <div className="parameter">
            <Age age={age} onChange={(e) => onAgeChange(parseFloat(e.target.value))} />
            <Height value={height} onHeightChange={this.onHeightChange} />
            <Weight weight={weight} onChange={(e) => onWeightChange(parseFloat(e.target.value))} />
          </div>
          <Activity
            activities={activity}
            activityValue={activityValue}
            onActivityChange={this.onActivityChange}
          />
          <div className="calculator-button">
            <button
              type="submit"
              className="button button-submit calculate-btn"
            // Решить с disabled
            >
              Calculate
            </button>
            <button
              type="button"
              className="button button-clear"
              onClick={this.onClearCalculator}
            // Решить с disabled
            >
              Clear fields and calculation
            </button>
          </div>
        </form>
        {
          (maintainWeight || userSelectedCalories)
            ? <CalculatorResult /> : null
        }
      </section>
    );
  }
}

const mapStateToProps = ({
  userData: { userAge, userWeight, userCalories }, weightTarget: { maintainWeight },
}) => ({
  age: userAge,
  weight: userWeight,
  userSelectedCalories: userCalories,
  maintainWeight,
});

const mapDispatchToProps = (dispatch) => ({
  onClearData: () => dispatch(onClearCalorieCalculator()),
  onAgeChange: (value) => dispatch(getUserAge(value)),
  onWeightChange: (value) => dispatch(getUserWeight(value)),
  forMaintainWeight: (value) => dispatch(getMaintainWeight(value)),
  forNormalWeightLoss: (value) => dispatch(getNormalWeightLoss(value)),
  forExtremeWeightLoss: (value) => dispatch(getExtremeWeightLoss(value)),
  forNormalWeightGain: (value) => dispatch(getNormalWeightGain(value)),
  forExtremeWeightGain: (value) => dispatch(getExtremeWeightGain(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
