import React from 'react';
import { texts } from '../../data';
import './error-indicator.css';
import icon from './error-indicator.png';

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <p className="error-message">
        <span className="boom">{texts.errorMessage.global[0]}</span>
        <span>{texts.errorMessage.global[1]}</span>
      </p>
    </div>
  );
}

export default ErrorIndicator;
