import React, { useState } from 'react';
import withNinjasService from '../../../../hoc';
import SearchResult from '../search-result';
import { texts } from '../../../../../data';
import imgSearch from '../../../../../images/search.svg';
import './search-panel.css';
import Spinner from '../../../../spinner';

const errorMessage = {
  noSearch: <p className="error-message">{texts.errorMessage.foodNoSearch}</p>,
  noCorrectly: <p className="error-message">{texts.errorMessage.foodNoCorrectly}</p>,
};

const SearchPanel = ({ getFood }) => {
  const [productSearch, setProductSearch] = useState('');
  const [food, setFood] = useState('');
  const [kcal, setKcal] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [size, setSize] = useState(0);
  const [view, setView] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(errorMessage.noSearch);

  const onFoodAdded = (item) => {
    if (item === undefined) {
      return (
        setError(errorMessage.noSearch),
        setNoResult(true)
      );
    }
    const {
      foodName, calories, servingSize, protein, fat, carbohydrates,
    } = item;
    return (
      setFood(foodName),
      setKcal(calories),
      setProteins(protein),
      setFats(fat),
      setCarbs(carbohydrates),
      setSize(servingSize),
      setNoResult(false));
  };

  const addFood = () => {
    getFood(food)
      .then((item) => {
        setError(null);
        onFoodAdded(item[0]);
        setLoading(false);
      })
      .catch(() => {
        setError(errorMessage.noCorrectly);
        setNoResult(true);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setView(false);
    setProductSearch(e.target.value);
  };

  const onClick = () => {
    setNoResult(false);
    setLoading(true);
    setFood(productSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood();
    setProductSearch('');
    setView(true);
  };

  const loaded = (loading)
    ? <Spinner />
    : (
      <SearchResult
        foodName={food}
        carbohydrates={carbs}
        proteins={proteins}
        fats={fats}
        calories={kcal}
        servingSize={size}
      />
    );

  const result = (noResult) ? (error) : (loaded);

  return (
    <div className="search-panel">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input search-input"
          value={productSearch}
          placeholder="write the product..."
          onChange={handleChange}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={onClick}
        >
          <img src={imgSearch} width="37px" height="37px" alt="Search" />
        </button>
      </form>
      {(view) ? result : null}
    </div>
  );
};

const mapMethodsToProps = (service) => ({
  getFood: service.getResultsOfSearch,
});

export default withNinjasService(mapMethodsToProps)(SearchPanel);
