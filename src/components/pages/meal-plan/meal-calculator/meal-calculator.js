import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NutrientRatio from './nutrient-ratio';
import MealCalculatorResult from './meal-calculator-result';
import { texts } from '../../../../data';
import './meal-calculator.css';

function MealCalculator() {
  const userKcal = useSelector(({ userData: { userCalories } }) => userCalories);
  const [calories, setCalories] = useState(userKcal);
  const [proteinPercent, setProteinPercent] = useState('');
  const [fatPercent, setFatPercent] = useState('');
  const [carboPercent, setCarboPercent] = useState('');
  const [userProteinPercent, setUserProteinPercent] = useState('');
  const [userFatPercent, setUserFatPercent] = useState('');
  const [userCarboPercent, setUserCarboPercent] = useState('');
  const [ratioId, setRatioId] = useState('');
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

  const totalUserRatio = () => {
    const total = Number(userProteinPercent + userFatPercent + userCarboPercent).toFixed(1);
    if (Number.isNaN(userProteinPercent)
      || Number.isNaN(userFatPercent)
      || Number.isNaN(userCarboPercent)) {
      return setError(texts.errorMessage.empty);
    }
    if (total > 1) {
      return setError(texts.errorMessage.greater);
    }
    if (total < 1) {
      return setError(texts.errorMessage.less);
    }
    return (
      setError(null),
      onNutrientRatioChange(userProteinPercent, userFatPercent, userCarboPercent)
    );
  };

  const setNutrientRatio = () => {
    if (ratioId === 3) {
      return totalUserRatio();
    }
    return null;
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

  const onRatioIdChange = (id, prot, fat, carbs) => {
    if (id === 3) {
      return setRatioId(id);
    }
    return (
      setRatioId(id),
      onNutrientRatioChange(prot, fat, carbs));
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
                className="input"
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
}

export default MealCalculator;
