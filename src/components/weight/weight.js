import React from 'react';

import './weight.css';

function Weight() {
  return (
    <label htmlFor="weight" className="parameter__item">
      <h2 className="subtitle">Вес</h2>
      <span>кг</span>
      <input type="text" id="weight" value="" placeholder="0" />
    </label>
  );
}

export default Weight;
