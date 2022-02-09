import React from 'react';
import imgRemove from '../../../../../../images/garbage.svg';
import './product-item.css';

const ProductItem = (props) => {
  const {
    id, foodName, carbs, protein, fat, kcal, portion, onClick,
  } = props;
  return (
    <tr key={id} className="table-row">
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
        <span className="value">{portion}</span>
      </td>
      <td className="data-remove">
        <button
          type="button"
          className="remove-btn"
          onClick={onClick}
        >
          <img src={imgRemove} width="25px" height="25px" alt="Remove" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
