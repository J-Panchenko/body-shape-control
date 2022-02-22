import React from 'react';
import './weight.css';

function Weight({ onChange }) {
  return (
    <label htmlFor="weight" className="parameter__item">
      <h2 className="parameter-subtitle">Weight</h2>
      <span>kg</span>
      <input
        type="number"
        className="input"
        aria-label="weight-input"
        required
        id="weight"
        min={20}
        max={500}
        step={0.1}
        placeholder="0"
        onChange={onChange}
      />
    </label>
  );
}

export default Weight;
