import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NutrientRatio from '../nutrient-ratio';
import MealCalculatorResult from '../meal-calculator-result';
import ratio from '../../../../data/nutrient-ratio';
import texts from '../../../../data/texts';
import './meal-calculator.css';

const MealCalculator = () => {
  const [calories, setCalories] = useState(useSelector(({ userCalories }) => userCalories));
  const [proteinPercent, setProteinPercent] = useState(null);
  const [fatPercent, setFatPercent] = useState(null);
  const [carboPercent, setCarboPercent] = useState(null);
  const [userProteinPercent, setUserProteinPercent] = useState(null);
  const [userFatPercent, setUserFatPercent] = useState(null);
  const [userCarboPercent, setUserCarboPercent] = useState(null);
  const [ratioId, setRatioId] = useState(null);
  const [error, setError] = useState(null);
  const [mealCalculatorResult, setMealCalculatorResult] = useState(false);
  const [textBtn, setTextBtn] = useState('Hide Calculator');
  const [viewCalculator, setViewCalculator] = useState(true);

  const mealData = [calories, proteinPercent, fatPercent, carboPercent];

  const onNutrientRatioChange = (protein, fat, carbohydrates) => {
    setProteinPercent(protein);
    setFatPercent(fat);
    setCarboPercent(carbohydrates);
  };

  const totalUserRatio = (total) => {
    if ((Number.isNaN(total))
      || (((userProteinPercent && userFatPercent && userCarboPercent) === null)
        && ratioId === 3)) {
      return setError('* Enter a value in the empty field, please.');
    }
    if (total > 1 && ratioId === 3) {
      return setError('* The sum of the entered values is greater than 100%. Fix it!');
    }
    if (total < 1 && ratioId === 3) {
      return setError('* The sum of the entered values is less than 100%. Fix it!');
    }
    return setError(null);
  };

  const setNutrientRatio = () => {
    const total = userProteinPercent + userFatPercent + userCarboPercent;
    totalUserRatio(total);
    if (ratioId === 3 && total === 1) {
      return onNutrientRatioChange(userProteinPercent, userFatPercent, userCarboPercent);
    }
    return ratio.map((item) => {
      const {
        id, protein, fat, carbohydrates,
      } = item;
      if (ratioId === id) {
        return onNutrientRatioChange(protein, fat, carbohydrates);
      }
      return null;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < mealData.length; i += 1) {
      if (mealData[i] === null) {
        return setMealCalculatorResult(false);
      }
    }
    return setMealCalculatorResult(true);
  };

  const handleClick = () => {
    setNutrientRatio();
  };

  const onCalorieGoalChange = (e) => {
    const parseCalories = parseFloat(e.target.value);
    return setCalories(parseCalories);
  };

  const onRatioIdChange = (id) => {
    setRatioId(id);
  };

  const onProteinChange = (value) => {
    setUserProteinPercent(value);
  };

  const onFatChange = (value) => {
    setUserFatPercent(value);
  };

  const onCarboChange = (value) => {
    setUserCarboPercent(value);
  };

  const changeTextBtn = (text) => ((text === 'Hide Calculator')
    ? setTextBtn('Show Calculator') : setTextBtn('Hide Calculator'));

  const changeViewCalc = () => ((viewCalculator)
    ? setViewCalculator(false) : setViewCalculator(true));

  const onViewCalculator = () => {
    changeTextBtn(textBtn);
    changeViewCalc();
  };

  return (
    <div>
      {viewCalculator
        ? (
          <form onSubmit={handleSubmit} className="meal-calc__form">
            <label htmlFor="calories-goal" className="calories-goal">
              <span>{texts.caloriesGoal}</span>
              <input
                type="number"
                id="calories-goal"
                placeholder="2000 kcal/day"
                value={calories}
                onChange={onCalorieGoalChange}
                required
              />
            </label>
            <div className="nutrient-ratio">
              <p className="nutrient-ratio__text">
                {texts.nutrientRatioText[0]}
                {' '}
                <span>{texts.nutrientRatioText[1]}</span>
              </p>
              <NutrientRatio
                onRatioIdChange={onRatioIdChange}
                onProteinChange={onProteinChange}
                onFatChange={onFatChange}
                onCarboChange={onCarboChange}
                error={error}
              />
            </div>
            <button
              type="submit"
              className="button button-submit meal-plan__btn"
              onClick={handleClick}
            >
              Find Out Target Values
            </button>
          </form>
        )
        : null}
      <button
        type="button"
        className="button meal-plan__btn meal-plan__btn-view"
        onClick={onViewCalculator}
      >
        {textBtn}
      </button>
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
