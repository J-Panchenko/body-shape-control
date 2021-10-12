import React from 'react';

import './gender.css';
import user from '../../constants/user';

function Gender({ onGenderChange }) {
  return (
    <div className="gender">
      <h2 className="subtitle">Пол</h2>
      <div className="gender-buttons">
        <div className="gender__button">
          <label htmlFor="male-field">
            <input
              type="radio"
              name="gender"
              value={user.male.genderName}
              id="male-field"
              onChange={onGenderChange}
            />
            <span>Мужчина</span>
          </label>
        </div>
        <div className="gender__button">
          <label htmlFor="female-field">
            <input
              type="radio"
              name="gender"
              value={user.female.genderName}
              id="female-field"
              onChange={onGenderChange}
            />
            <span>Женщина</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Gender;
