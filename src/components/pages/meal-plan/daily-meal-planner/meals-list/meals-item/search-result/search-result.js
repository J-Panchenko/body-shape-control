import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeServingSize } from '../../../../../../../models';
import { imgAdd } from '../../../../../../../images';
import './search-result.css';
import { calculateSumOfNutrients } from '../../../../../../../actions';

function SearchResult(props) {
  const [searchResult, setSearchResult] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    kcal: 0,
    portion: 0,
  });
  const dispatch = useDispatch();
  const {
    foodName, carbohydrates, proteins, fats, calories, servingSize, addFunction,
  } = props;

  SearchResult.propTypes = {
    foodName: PropTypes.string.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fats: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    servingSize: PropTypes.number,
    addFunction: PropTypes.func.isRequired,
  };

  SearchResult.defaultProps = {
    servingSize: 100,
  };

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

  const onClick = () => {
    dispatch(addFunction(addedProduct));
    dispatch(calculateSumOfNutrients());
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
              onClick={() => onClick()}
            >
              <img src={imgAdd} width="30px" height="30px" alt="Add" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResult;
