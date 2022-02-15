import React from 'react';
import './age.css';

function Age({ onChange }) {
  return (
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
        placeholder="0"
        onChange={onChange}
      />
    </label>
  );
}

export default Age;
