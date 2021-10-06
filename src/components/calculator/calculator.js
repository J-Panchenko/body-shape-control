import React, { Component } from 'react';

import Activity from '../activity';
import Age from '../age';
import Gender from '../gender';
import Height from '../height';
import Weight from '../weight';

import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: [
        {
          id: 1, label: 'Минимальная', description: 'Сидячая работа и нет физических нагрузок, минимальная активность в быту', value: 1.2,
        },
        {
          id: 2, label: 'Низкая', description: 'Нерегулярные тренировки до 3 раз в неделю, активность в быту', value: 1.375,
        },
        {
          id: 3, label: 'Средняя', description: 'Тренировки 3-5 раз в неделю, работа средней тяжести', value: 1.4625,
        },
        {
          id: 4, label: 'Выше среднего', description: 'Интенсивные тренировки 4-5 раз в неделю', value: 1.55,
        },
        {
          id: 5, label: 'Высокая', description: 'Тренировки 6-7 раз в неделю', value: 1.6375,
        },
        {
          id: 6, label: 'Очень высокая', description: 'Больше 6 тренировок в неделю и физическая работа', value: 1.9,
        },
      ],
    };
  }

  render() {
    const { activity } = this.state;

    return (
      <form className="calculator-form">
        <Gender selectedGender={this.selectedGender} />
        <div className="parameter">
          <Age />
          <Height />
          <Weight />
        </div>
        <Activity activities={activity} />
        <div className="calculator-button">
          <button type="submit" className="button button-submit">
            Рассчитать
          </button>
          <button type="button" className="button button-reset" disabled>
            Очистить поля и расчёт
          </button>
        </div>
      </form>
    );
  }
}
