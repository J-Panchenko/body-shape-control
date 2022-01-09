import React from 'react';
import './meal-calculator-result.css';

const MealCalculatorResult = ({ ...props }) => {
  const {
    calories, protein, fat, carbo,
  } = props;
  return (
    <div>
      {calories}
      {protein}
      {fat}
      {carbo}
    </div>
  );
};

export default MealCalculatorResult;
