import React from 'react';
import './weight.css';

function Weight({ weight, onChange }) {
  return (
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
        onChange={onChange}
      />
    </label>
  );
}

export default Weight;
