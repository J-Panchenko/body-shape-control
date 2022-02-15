import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WaterGoalResult from '../water-goal-result';
import { getWaterGoalInML, getWaterGoalInLiters, getGlassesOfWater } from '../../../../models';
import { texts } from '../../../../data';
import './water-goal-calculator.css';

function WaterGoalCalculator() {
  const [age, setAge] = useState(useSelector(({ userData: { userAge } }) => userAge));
  const [weight, setWeight] = useState(useSelector(({ userData: { userWeight } }) => userWeight));
  const [factor, setFactor] = useState(false);
  const [result, setResult] = useState(false);
  const [waterGoal, setWaterGoal] = useState(null);
  const [litersOfWater, setLitersOfWater] = useState(null);
  const [glassesOfWater, setGlassesofWater] = useState(null);
  const [textBtn, setTextBtn] = useState('Hide Calculator');
  const [viewCalculator, setViewCalculator] = useState(true);

  const onFactorChange = () => (factor ? setFactor(false) : setFactor(true));

  const onSubmit = (e) => {
    e.preventDefault();
    setWaterGoal(getWaterGoalInML(age, weight, factor));
    setLitersOfWater(getWaterGoalInLiters(age, weight, factor));
    setGlassesofWater(getGlassesOfWater(age, weight, factor));
    setResult(true);
  };

  const onClearCalculator = () => {
    setAge(0);
    setWeight(0);
    setFactor(false);
    setResult(false);
    setWaterGoal(0);
    setLitersOfWater(0);
    setGlassesofWater(0);
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
    <>
      {viewCalculator
        ? (
          <form className="water-form" onSubmit={onSubmit}>
            <label htmlFor="age" className="parameter__item">
              <h2 className="parameter-subtitle">Age</h2>
              <span>years</span>
              <input
                type="number"
                className="input"
                required
                id="age"
                min={15}
                max={100}
                step={1}
                value={age}
                placeholder="0"
                onChange={(e) => setAge(parseFloat(e.target.value))}
              />
            </label>
            <label htmlFor="weight" className="parameter__item">
              <h2 className="parameter-subtitle">Weight</h2>
              <span>kg</span>
              <input
                type="number"
                className="input"
                required
                id="weight"
                min={20}
                max={500}
                step={0.1}
                value={weight}
                placeholder="0"
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            </label>
            <div className="parameter__item-checkbox">
              <p className="parameter__item-description">{texts.waterGoal[0]}</p>
              <p className="parameter__item-description">{texts.waterGoal[1]}</p>
              <input
                type="checkbox"
                id="factor"
                className="checkbox-factor"
                checked={factor}
                onClick={onFactorChange}
              />
              <label htmlFor="factor" className="checkbox-factor__label">
                <span>{texts.waterGoal[2]}</span>
              </label>
            </div>
            <div className="calculator-button">
              <button
                type="submit"
                className="button button-submit calculate-btn"
              >
                Calculate
              </button>
              <button
                type="button"
                className="button button-clear"
                onClick={onClearCalculator}
              >
                Clear fields and calculation
              </button>
            </div>
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
      {
        (result)
          ? (
            <WaterGoalResult
              waterML={waterGoal}
              waterLiters={litersOfWater}
              glasses={glassesOfWater}
            />
          ) : null
      }
    </>
  );
}

export default WaterGoalCalculator;
