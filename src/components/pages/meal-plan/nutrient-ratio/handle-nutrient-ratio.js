import React, { useState } from 'react';
import './nutrient-ratio.css';

const HandleNutrientRatio = ({ onNutrientRatioChange }) => {
  const [proteinPercent, setProteinPercent] = useState(0);
  const [fatPercent, setFatPercent] = useState(0);
  const [carboPercent, setCarboPercent] = useState(0);
  const [required, setRequired] = useState(false);

  const onChangeNutrientRatio = () => {
    setRequired(true);
  };

  return (
    <li>
      <label htmlFor="3">
        <input
          type="radio"
          required
          name="nutrient-ratio"
          id="3"
          protein={proteinPercent}
          fat={fatPercent}
          carbo={carboPercent}
          onChange={onNutrientRatioChange}
          onClick={onChangeNutrientRatio}
        />
        <span>Enter your nutrient ratio option (total - 100%) Percent of: </span>
        <div>
          <label htmlFor="protein-percent">
            protein
            {' '}
            <input type="number" id="protein-percent" placeholder="protein, %" min={0} max={100} step={1} onChange={(e) => setProteinPercent(e.target.value)} required={required} />
            {' '}
          </label>
          <label htmlFor="fat-percent">
            fat
            {' '}
            <input type="number" id="fat-percent" placeholder="fat, %" min={0} max={100} step={1} onChange={(e) => setFatPercent(e.target.value)} required={required} />
            {' '}
          </label>
          <label htmlFor="carbo-percent">
            carbohydrates
            {' '}
            <input type="number" id="carbo-percent" placeholder="carbo, %" min={0} max={100} step={1} onChange={(e) => setCarboPercent(e.target.value)} required={required} />
            {' '}
          </label>
        </div>
      </label>
    </li>
  );
};

export default HandleNutrientRatio;
