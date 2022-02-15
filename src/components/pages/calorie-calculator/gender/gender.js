import React from 'react';

import './gender.css';
import user from '../../../../constants/user';

function Gender({ value, onGenderChange }) {
  return (
    <div className="gender">
      <h2 className="parameter-subtitle">Gender</h2>
      <div className="gender-buttons">
        <div className="gender__button">
          <label htmlFor="male-field">
            <input
              type="radio"
              required
              name="gender"
              checked={value === user.male.genderName}
              value={user.male.genderName}
              id="male-field"
              onChange={onGenderChange}
            />
            <span>Male</span>
          </label>
        </div>
        <div className="gender__button">
          <label htmlFor="female-field">
            <input
              type="radio"
              required
              name="gender"
              checked={value === user.female.genderName}
              value={user.female.genderName}
              id="female-field"
              onChange={onGenderChange}
            />
            <span>Female</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Gender;
