import React from 'react';
import './age.css';

const Age = ({ age, onChange }) => (
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
      onChange={onChange}
    />
  </label>
);

export default Age;
