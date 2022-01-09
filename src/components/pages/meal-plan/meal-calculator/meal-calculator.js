import React, { useState } from 'react';
import './meal-calculator.css';
import NutrientRatio from '../nutrient-ratio';
import nutrientRatio from '../../../../data/nutrient-ratio';
import MealCalculatorResult from '../meal-calculator-result';

const MealCalculator = () => {
  const [calories, setCalories] = useState(0);
  const [proteinPercent, setProteinPercent] = useState(0);
  const [fatPercent, setFatPercent] = useState(0);
  const [carboPercent, setCarboPercent] = useState(0);
  const [mealCalculatorResult, setMealCalculatorResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setMealCalculatorResult(true);
  };

  const onNutrientRatioChange = (e) => {
    setProteinPercent(e.target.protein);
    setFatPercent(e.target.fat);
    setCarboPercent(e.target.carbo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="calories-goal">
          How many calories do you plan to consume per day?
          <input type="number" id="calories-goal" placeholder="2000 kcal/day" onChange={(e) => setCalories(e.target.value)} />
        </label>
        <div>
          <span>What ratio of protein, fat and carbohydrates in the diet do you prefer?</span>
          <span>(protein/fat/carbs % of calories)</span>
          <NutrientRatio ratio={nutrientRatio} onNutrientRatioChange={onNutrientRatioChange} />
        </div>
        <button type="submit" onClick={handleClick}>Find Out Target Values</button>
      </form>
      {mealCalculatorResult
        ? (
          <MealCalculatorResult
            calories={calories}
            protein={proteinPercent}
            fat={fatPercent}
            carbo={carboPercent}
          />
        )
        : null}
    </div>
  );
};

export default MealCalculator;
