import React from 'react';

import './error-indicator.css';
import icon from './error-indicator.png';

const ErrorIndicator = () => ((
  <div className="error-indicator">
    <img src={icon} alt="error icon" />
    <p className="error-message">
      <span className="boom">Oops!</span>
      <span>Something went wrong!</span>
    </p>
  </div>
));

export default ErrorIndicator;
