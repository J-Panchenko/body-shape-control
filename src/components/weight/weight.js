import React from 'react';

import './weight.css';

function Weight({ value, onWeightChange }) {
  return (
    <label htmlFor="weight" className="parameter__item">
      <h2 className="subtitle">Вес</h2>
      <span>кг</span>
      <input
        type="number"
        required
        id="weight"
        min={20}
        max={500}
        step={0.1}
        value={value}
        placeholder="0"
        onChange={onWeightChange}
      />
    </label>
  );
}

export default Weight;
