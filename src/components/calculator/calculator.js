import React, { Component } from 'react';

import Activity from '../activity';
import Age from '../age';
import Gender from '../gender';
import Height from '../height';
import Weight from '../weight';
import CalculatorResult from '../calculator-result';

import './calculator.css';
import activities from '../../data/activities';
import calculateMetabolism from '../../models/calculator';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: activities,
      activityValue: 0,
      calculatorResult: 0,
    };
  }

  onGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  }

  onAgeChange = (event) => {
    const ageValue = parseFloat(event.target.value);

    if (ageValue >= 15 && ageValue <= 100) {
      this.setState({
        age: ageValue,
      });
    }
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

  onResult = (event) => {
    event.preventDefault(); // TODO: Разобраться в каких случаях нужно
    const { ...state } = this.state;
    const metabolism = calculateMetabolism(state);

    this.setState({
      calculatorResult: metabolism,
    });
  }

  render() {
    const {
      gender, age, height, weight, activity, activityValue, calculatorResult,
    } = this.state;

    return (
      <div>
        <form className="calculator-form">
          <Gender value={gender} onGenderChange={this.onGenderChange} />
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
            <button type="submit" className="button button-submit" onClick={this.onResult}>
              Рассчитать
            </button>
            <button type="button" className="button button-reset" disabled>
              Очистить поля и расчёт
            </button>
          </div>
        </form>
        {calculatorResult ? <CalculatorResult value={calculatorResult} /> : null}
      </div>
    );
  }
}
