import React, { Component } from 'react';
import './meal-plan.css';
import NinjasService from '../../../services/ninjas-service';
import MealCalculator from './meal-calculator';
import texts from '../../../data/texts';

class MealPlan extends Component {
  service = new NinjasService();

  constructor() {
    super();
    this.state = {
      foodName: '',
      calories: 0,
      servingSize: 0,
      protein: 0,
      fat: 0,
      carbohydrates: 0,
    };
  }

  onFoodAdded = (food) => {
    this.setState({ ...food });
  };

  addFood = () => {
    const { foodName } = this.state;
    this.service.getResultsOfSearch(foodName)
      .then((food) => {
        this.onFoodAdded(food[0]);
      });
  };

  handleChange = (e) => {
    this.setState({ foodName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addFood();
  };

  render() {
    const {
      calories, servingSize, protein, fat, carbohydrates,
    } = this.state;

    return (
      <section>
        <h2 className="section-title visually-hidden">Your Daily Meal Plan</h2>
        <div className="section-container">
          <p className="section-text">{texts.prefaceMealPlan[0]}</p>
          <p className="section-text">{texts.prefaceMealPlan[1]}</p>
          <MealCalculator />

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-food">
              What did you eat today?
              <input type="text" id="search-food" onChange={this.handleChange} />
            </label>
            <button type="submit">Search</button>
          </form>
          <ul>
            <li>
              Calories:
              {' '}
              {calories}
            </li>
            <li>
              Serving size:
              {' '}
              {servingSize}
            </li>
            <li>
              Protein:
              {' '}
              {protein}
            </li>
            <li>
              Fat:
              {' '}
              {fat}
            </li>
            <li>
              Carbohydrates:
              {' '}
              {carbohydrates}
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MealPlan;
