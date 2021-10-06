import React from 'react';

import './age.css';

function Age() {
  return (
    <label htmlFor="age" className="parameter__item">
      <h2 className="subtitle">Возраст</h2>
      <span>лет</span>
      <input type="text" id="age" value="" placeholder="0" />
    </label>
  );
}

export default Age;
