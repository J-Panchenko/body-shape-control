import React from 'react';

import './height.css';

function Height({ value, onHeightChange }) {
  return (
    <label htmlFor="height" className="parameter__item">
      <h2 className="subtitle">Height</h2>
      <span>cm</span>
      <input
        type="number"
        required
        id="height"
        min={60}
        max={260}
        step={0.1}
        value={value}
        placeholder="0"
        onChange={onHeightChange}
      />
    </label>
  );
}

export default Height;
