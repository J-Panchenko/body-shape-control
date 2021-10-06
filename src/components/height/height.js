import React from 'react';

import './height.css';

function Height() {
  return (
    <label htmlFor="height" className="parameter__item">
      <h2 className="subtitle">Рост</h2>
      <span>см</span>
      <input type="text" id="height" value="" placeholder="0" />
    </label>
  );
}

export default Height;
