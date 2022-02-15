import React from 'react';
import { useSelector } from 'react-redux';
import {
  addProductToBreakfast,
  addProductToDinner,
  addProductToLunch,
  addProductToSnacks,
  removeProductFromBreakfast,
  removeProductFromDinner,
  removeProductFromLunch,
  removeProductFromSnacks,
} from '../../../../../actions';
import { texts } from '../../../../../data';
import MealsItem from './meals-item';
import './meals-list.css';

const MealsList = () => {
  const productsBreakfast = useSelector((state) => state.meals.breakfast);
  const productsLunch = useSelector((state) => state.meals.lunch);
  const productsDinner = useSelector((state) => state.meals.dinner);
  const productsSnacks = useSelector((state) => state.meals.snacks);
  const key = [1, 2, 3, 4];
  return (
    <ul className="meals">
      <li key={key[0]} className="meals__item">
        <MealsItem
          name={texts.mealsName.breakfast}
          products={productsBreakfast}
          addFunction={addProductToBreakfast}
          removeFunction={removeProductFromBreakfast}
        />
      </li>
      <li key={key[1]} className="meals__item">
        <MealsItem
          name={texts.mealsName.lunch}
          products={productsLunch}
          addFunction={addProductToLunch}
          removeFunction={removeProductFromLunch}
        />
      </li>
      <li key={key[2]} className="meals__item">
        <MealsItem
          name={texts.mealsName.dinner}
          products={productsDinner}
          addFunction={addProductToDinner}
          removeFunction={removeProductFromDinner}
        />
      </li>
      <li key={key[3]} className="meals__item">
        <MealsItem
          name={texts.mealsName.snacks}
          products={productsSnacks}
          addFunction={addProductToSnacks}
          removeFunction={removeProductFromSnacks}
        />
      </li>
    </ul>
  );
};
export default MealsList;
