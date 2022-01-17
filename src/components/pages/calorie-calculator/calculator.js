import React, { Component } from 'react';

import Activity from './activity';
import Age from './age';
import Gender from './gender';
import Height from './height';
import Weight from './weight';
import CalculatorResult from './calculator-result';

import './calculator.css';
import activities from '../../../data/activities';
import calculateMetabolism from '../../../models/calculator';

const initialState = {
  gender: '',
  age: '',
  height: '',
  weight: '',
  activity: activities,
  activityValue: '',
  calculatorResult: 0,
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  }

  onAgeChange = (event) => {
    this.setState({
      age: parseFloat(event.target.value),
    });
  }

  onHeightChange = (event) => {
    this.setState({
      height: parseFloat(event.target.value),
    });
  }

  onWeightChange = (event) => {
    this.setState({
      weight: parseFloat(event.target.value),
    });
  }

  onActivityChange = (event) => {
    this.setState({
      activityValue: parseFloat(event.target.value),
    });
  }

  onCalculatorResult = (event) => {
    event.preventDefault();
    const { ...state } = this.state;
    const metabolism = calculateMetabolism(state);
    this.setState({
      calculatorResult: metabolism,
    });
  }

  onCalculatorReset = (event) => {
    event.preventDefault();
    this.setState(initialState);
  }

  render() {
    const {
      gender, age, height,
      weight, activity, activityValue, calculatorResult,
    } = this.state;

    return (
      <section>
        <h2 className="section-title">
          Calorie Calculator
        </h2>
        <form className="calculator-form" onSubmit={this.onCalculatorResult}>
          <Gender
            value={gender}
            onGenderChange={this.onGenderChange}
          />
          <div className="parameter">
            <Age value={age} onAgeChange={this.onAgeChange} />
            <Height value={height} onHeightChange={this.onHeightChange} />
            <Weight value={weight} onWeightChange={this.onWeightChange} />
          </div>
          <Activity
            activities={activity}
            activityValue={activityValue}
            onActivityChange={this.onActivityChange}
          />
          <div className="calculator-button">
            <button
              type="submit"
              className="button button-submit"
              disabled={Object.is(this.state, initialState)}
            >
              Calculate
            </button>
            <button
              type="button"
              className="button button-reset"
              disabled={Object.is(this.state, initialState)}
              onClick={this.onCalculatorReset}
            >
              Clear fields and calculation
            </button>
          </div>
        </form>
        {calculatorResult ? <CalculatorResult maintainWeight={calculatorResult} /> : null}
      </section>
    );
  }
}
