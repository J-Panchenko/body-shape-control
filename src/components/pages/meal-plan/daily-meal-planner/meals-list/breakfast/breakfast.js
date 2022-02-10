import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromBreakfast, calculateSumOfNutrients } from '../../../../../../actions';
import SearchPanel from '../../search-panel';
import ProductItem from '../product-item/product-item';
import imgAdd from '../../../../../../images/add.svg';
import imgSetting from '../../../../../../images/setting.svg';
import imgSave from '../../../../../../images/save.svg';
import './breakfast.css';

const Breakfast = () => {
  const [viewList, setViewList] = useState(false);
  const [viewSearchPanel, setViewSearchPanel] = useState(true);
  const products = useSelector((state) => state.meals.breakfast);
  const dispatch = useDispatch();

  const product = products.map((prod) => {
    const {
      id, foodName, carbs, protein, fat, kcal, portion,
    } = prod;
    const productId = id;

    const onClick = () => {
      dispatch(removeProductFromBreakfast(productId));
      dispatch(calculateSumOfNutrients());
    };

    return (
      <ProductItem
        key={id}
        id={id}
        foodName={foodName}
        carbs={carbs}
        protein={protein}
        fat={fat}
        kcal={kcal}
        portion={portion}
        onClick={() => onClick()}
      />

    );
  });

  const onClickSave = () => {
    dispatch(calculateSumOfNutrients());
    setViewSearchPanel(false);
  };

  const breakfastList = (
    <>
      <div className="meals__item-button">
        <button
          type="button"
          className={(viewSearchPanel) ? 'btn btn-setting active' : 'btn btn-setting'}
          onClick={() => setViewSearchPanel(true)}
        >
          <img src={imgSetting} width="30px" height="30px" alt="Setting" />
        </button>
        <button
          type="button"
          className={(viewSearchPanel) ? 'btn btn-save' : 'btn btn-save active'}
          onClick={() => onClickSave()}
        >
          <img src={imgSave} width="30px" height="30px" alt="Setting" />
        </button>
      </div>
      {(viewSearchPanel) ? <SearchPanel /> : null}
      <table className="table">
        <tbody className="table-body">
          {product}
        </tbody>
      </table>
    </>
  );

  const viewListMeal = () => ((viewList) ? setViewList(false) : setViewList(true));

  return (
    <div className="meal__item-container">
      <div className="meal__item-head">
        <button
          type="button"
          className="view-btn"
          onClick={() => viewListMeal()}
        >
          <img
            className={(viewList) ? 'rotate' : null}
            src={imgAdd}
            width="30px"
            alt="Add/Close button"
          />
        </button>
        <h3 className="meals__item-title">Breakfast</h3>
      </div>
      {
        (viewList) ? breakfastList : null
      }
    </div>
  );
};

export default Breakfast;
