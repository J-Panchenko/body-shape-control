import React, { Component } from 'react';
import './daily-meal-plan.css';
import FatsecretService from '../../../services/fatsecret';

class DailyMealPlan extends Component {
  service = new FatsecretService();

  constructor() {
    super();
    this.state = {
      food: {
        foodName: '',
        calories: 0,
        servingSize: 0,
        protein: 0,
        fat: 0,
        carbohydrates: 0,
      },
    };
  }

  onFoodAdded = (food) => {
    this.setState({ food });
  };

  addFood = () => {
    const { food: { foodName } } = this.state;
    this.service.getResultsOfSearch(foodName)
      .then((food) => {
        this.onFoodAdded(food[0]);
        console.log(food);
      });
  };

  onHandleChange = (e) => {
    this.setState({ food: { foodName: e.target.value } });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.addFood();
  };

  render() {
    const { food } = this.state;
    return (
      <section>
        <h2 className="section-title">Your daily meal plan</h2>
        <form onSubmit={this.onHandleSubmit}>
          <label htmlFor="search-food">
            What did you eat today?
            <input type="text" id="search-food" onChange={this.onHandleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul>
          <li>
            Calories:
            {' '}
            {food.calories}
          </li>
          <li>
            Serving size:
            {' '}
            {food.servingSize}
          </li>
          <li>
            Protein:
            {' '}
            {food.protein}
          </li>
          <li>
            Fat:
            {' '}
            {food.fat}
          </li>
          <li>
            Carbohydrates:
            {' '}
            {food.carbohydrates}
          </li>
        </ul>
      </section>
    );
  }
}

export default DailyMealPlan;
