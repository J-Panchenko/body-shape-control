import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateSumOfNutrients } from '../../../../../../actions';
import SearchPanel from './search-panel';
import ProductItem from './product-item/product-item';
import { imgAdd, imgChange, imgSave } from '../../../../../../images';
import './meals-item.css';

function MealsItem(props) {
  const [viewList, setViewList] = useState(false);
  const [viewSearchPanel, setViewSearchPanel] = useState(true);
  const dispatch = useDispatch();
  const {
    name, products, addFunction, removeFunction,
  } = props;

  const product = products.map((prod) => {
    const {
      id, foodName, carbs, protein, fat, kcal, portion,
    } = prod;
    const productId = id;

    const onClick = () => {
      dispatch(removeFunction(productId));
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

  const itemList = (
    <>
      <div className="meals__item-button">
        <button
          type="button"
          className={(viewSearchPanel) ? 'btn btn-setting active' : 'btn btn-setting'}
          onClick={() => setViewSearchPanel(true)}
        >
          <img src={imgChange} width="27px" height="27px" alt="Setting" />
        </button>
        <button
          type="button"
          className={(viewSearchPanel) ? 'btn btn-save' : 'btn btn-save active'}
          onClick={() => onClickSave()}
        >
          <img src={imgSave} width="30px" height="30px" alt="Setting" />
        </button>
      </div>
      {(viewSearchPanel) ? <SearchPanel addFunction={addFunction} /> : null}
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
        <h3 className="meals__item-title">{name}</h3>
      </div>
      {
        (viewList) ? itemList : null
      }
    </div>
  );
}

export default MealsItem;
