import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeServingSize } from '../../../../../models';
import imgBasket from '../../../../../images/basket.svg';
import './search-result.css';
import { addProductToBreakfast } from '../../../../../actions';

const SearchResult = ({
  foodName, carbohydrates, proteins, fats, calories, servingSize,
}) => {
  const [searchResult, setSearchResult] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    kcal: 0,
    portion: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchResult({
      carbs: carbohydrates,
      protein: proteins,
      fat: fats,
      kcal: calories,
      portion: servingSize,
    });
  }, [carbohydrates, proteins, fats, calories, servingSize]);

  const onChangePortion = (e) => {
    const endPortion = Number(e.target.value);
    setSearchResult({
      carbs: changeServingSize(endPortion, carbohydrates),
      protein: changeServingSize(endPortion, proteins),
      fat: changeServingSize(endPortion, fats),
      kcal: changeServingSize(endPortion, calories),
      portion: endPortion,
    });
  };

  const {
    carbs, protein, fat, kcal, portion,
  } = searchResult;
  const id = Math.floor(Math.random() * 115) + 2;
  const addedProduct = {
    id, foodName, carbs, protein, fat, kcal, portion,
  };

  return (
    <table className="table">
      <tbody className="table-body">
        <tr className="table-row">
          <td className="data-info">
            <span className="name-value">{foodName}</span>
          </td>
          <td className="data-info">
            <span className="name">carb</span>
            <span className="value">{carbs}</span>
          </td>
          <td className="data-info">
            <span className="name">prot</span>
            <span className="value">{protein}</span>
          </td>
          <td className="data-info">
            <span className="name">fat</span>
            <span className="value">{fat}</span>
          </td>
          <td className="data-info">
            <span className="name">kcal</span>
            <span className="value">{kcal}</span>
          </td>
          <td className="data-info">
            <span className="name">size, g</span>
            <span className="value">
              <input
                type="number"
                value={portion}
                onChange={(e) => onChangePortion(e)}
              />
            </span>
          </td>
          <td className="data-add">
            <button
              type="button"
              className="add-btn"
              onClick={() => dispatch(addProductToBreakfast(addedProduct))}
            >
              <img src={imgBasket} width="30px" height="30px" alt="Add" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResult;
