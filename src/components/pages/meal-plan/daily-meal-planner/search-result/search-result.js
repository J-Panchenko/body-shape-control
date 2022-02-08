import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeServingSize } from '../../../../../models';
import imgBasket from '../../../../../images/basket.svg';
import './search-result.css';
import { addProductToBreakfast } from '../../../../../actions';

const SearchResult = ({
  foodName, carbohydrates, proteins, fats, calories, servingSize,
}) => {
  const [kcal, setKcal] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [portion, setPortion] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setPortion(servingSize);
    setKcal(calories);
    setCarbs(carbohydrates);
    setProtein(proteins);
    setFat(fats);
  }, [foodName, carbohydrates, proteins, fats, calories, servingSize]);

  const onChangePortion = (e) => {
    const endPortion = e.target.value;
    setKcal(changeServingSize(endPortion, calories));
    setCarbs(changeServingSize(endPortion, carbohydrates));
    setProtein(changeServingSize(endPortion, proteins));
    setFat(changeServingSize(endPortion, fats));
    setPortion(endPortion);
  };

  const id = portion + kcal + Math.random();
  const addedProduct = {
    foodName, carbs, protein, fat, kcal, portion, id,
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
