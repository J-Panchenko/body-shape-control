// /* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { nutrientRatio as ratio, texts } from '../../../../../data';
import './nutrient-ratio.css';

function NutrientRatio(props) {
  const {
    onRatioIdChange, onProteinChange, onFatChange, onCarboChange, error,
  } = props;
  const handleInputId = 3;

  const parseValue = (e) => {
    const number = parseFloat(e.target.value);
    return number / 100;
  };

  const radioButtons = ratio.map((item) => {
    const {
      id, label, description, protein, fat, carbohydrates,
    } = item;

    return (
      <li className="nutrient-ratio__item" key={id}>
        <input
          type="radio"
          required
          name="nutrient-ratio"
          id={id}
          onChange={
            () => onRatioIdChange(id, protein, fat, carbohydrates)
          }
        />
        <label htmlFor={id}>{label}</label>
        <p>{description}</p>
      </li>
    );
  });

  return (
    <ul className="nutrient-ratio__list">
      {radioButtons}
      <li className="nutrient-ratio__item-hundle" key={handleInputId}>
        <input
          type="radio"
          required
          name="nutrient-ratio"
          id={handleInputId}
          className="hundle-input"
          onChange={() => onRatioIdChange(handleInputId)}
        />
        <label htmlFor={handleInputId} className="nutrient-ratio__item-hundle-label">
          <p>{texts.nutrientRatioText[2]}</p>
        </label>
        <div className="nutrient-ratio__hundle">
          <label htmlFor="protein-percent" className="nutrient-ratio__option">
            <input
              type="number"
              id="protein-percent"
              className="input"
              placeholder="protein"
              min={0}
              max={100}
              step={1}
              onChange={(e) => onProteinChange(parseValue(e))}
            />
            <span>Protein, %</span>
          </label>
          <label htmlFor="fat-percent" className="nutrient-ratio__option">
            <input
              type="number"
              id="fat-percent"
              className="input"
              placeholder="fat"
              min={0}
              max={100}
              step={1}
              onChange={(e) => onFatChange(parseValue(e))}
            />
            <span>Fat, %</span>
          </label>
          <label htmlFor="carbo-percent" className="nutrient-ratio__option">
            <input
              type="number"
              id="carbo-percent"
              className="input"
              placeholder="carbs"
              min={0}
              max={100}
              step={1}
              onChange={(e) => onCarboChange(parseValue(e))}
            />
            <span>Carbs, %</span>
          </label>
        </div>
        <div className="nutrient-ratio__hundle-error">{(error === '') ? null : error}</div>
      </li>
    </ul>
  );
}

export default NutrientRatio;
