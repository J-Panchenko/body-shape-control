import React from 'react';
import './nutrient-ratio.css';
import HandleNutrientRatio from './handle-nutrient-ratio';

const NutrientRatio = ({ ratio, onNutrientRatioChange }) => {
  const radioButtons = ratio.map((item) => {
    const {
      id, label, protein, fat, carbohydrates, description,
    } = item;

    return (
      <li className="nutrient-ratio__item">
        <input
          type="radio"
          required
          name="nutrient-ratio"
          id={id}
          protein={protein}
          fat={fat}
          carbo={carbohydrates}
        // checked={}
          onNutrientRatioChange={() => onNutrientRatioChange}
        />
        <label htmlFor={id}>{label}</label>
        <p>{description}</p>
      </li>
    );
  });

  return (
    <ul className="nutrient-ratio__list">
      {radioButtons}
      <HandleNutrientRatio onNutrientRatioChange={() => onNutrientRatioChange} />
    </ul>
  );
};

export default NutrientRatio;
