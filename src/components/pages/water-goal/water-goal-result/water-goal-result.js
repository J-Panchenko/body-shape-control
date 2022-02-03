import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { texts } from '../../../../data';
import './water-goal-result.css';

const WaterGoalResult = ({ waterML, waterLiters, glasses }) => {
  useEffect(() => {
    scroller.scrollTo('water-goal-result', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, [waterML]);

  return (
    <div className="water-goal-result">
      <h3 className="water-goal-result__subtitle">Your Daily Water Goal</h3>
      <p className="water-goal-result__text">
        {texts.waterGoalResult[0]}
        <span className="value">{waterML}</span>
        <span>{texts.waterGoalResult[1]}</span>
      </p>
      <ul className="water-goal-result__description">
        <li className="water-goal-result__description-item">
          <span className="value">{waterLiters}</span>
          <span>{texts.waterGoalResult[2]}</span>
          <span className="unit">{texts.waterGoalResult[3]}</span>
        </li>
        <li className="water-goal-result__description-item">
          <span className="value">{glasses}</span>
          <span>{texts.waterGoalResult[4]}</span>
          <span className="unit">{texts.waterGoalResult[5]}</span>
        </li>
      </ul>
    </div>
  );
};

export default WaterGoalResult;