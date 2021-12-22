import React from 'react';

import './age.css';

function Age({ value, onAgeChange }) {
  return (
    <label htmlFor="age" className="parameter__item">
      <h2 className="subtitle">Age</h2>
      <span>years</span>
      <input
        type="number"
        required
        id="age"
        min={15}
        max={100}
        step={1}
        value={value}
        placeholder="0"
        onChange={onAgeChange}
      />
    </label>
  );
}

export default Age;
