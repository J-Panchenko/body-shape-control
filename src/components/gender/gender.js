import React, { Component } from 'react';

import './gender.css';

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
    };
  }

  render() {
    return (
      <div className="gender">
        <h2 className="subtitle">Пол</h2>
        <div className="gender-buttons">
          <div className="gender__button">
            <label htmlFor="male-field">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male-field"
              />
              <span>Мужчина</span>
            </label>
          </div>
          <div className="gender__button">
            <label htmlFor="female-field">
              <input
                type="radio"
                name="gender"
                value="female"
                id="female-field"
              />
              <span>Женщина</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
