import { actionType } from '../constants';
import { sumOfMealNutrients } from '../models';

const deleteProduct = (products, productId) => {
  const productIndex = products.findIndex(({ id }) => id === productId);
  const newList = [
    ...products.slice(0, productIndex),
    ...products.slice(productIndex + 1),
  ];
  return newList;
};

const calculateSumOfNutrients = (state) => {
  const meals = [state.breakfast, state.lunch, state.dinner, state.snacks];
  const carbs = Math.round(sumOfMealNutrients(meals, 'carbs'));
  const protein = Math.round(sumOfMealNutrients(meals, 'protein'));
  const fat = Math.round(sumOfMealNutrients(meals, 'fat'));
  const kcal = Math.round(sumOfMealNutrients(meals, 'kcal'));

  return {
    carbs, protein, fat, kcal,
  };
};

const updateMeals = (state, action) => {
  if (state === undefined) {
    return {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
      currentSum: {},
    };
  }

  switch (action.type) {
    case actionType.productAddedToBreakfast:
      return {
        ...state.meals,
        breakfast: [...state.meals.breakfast, action.newProduct],
      };
    case actionType.productAddedToLunch:
      return {
        ...state.meals,
        lunch: [...state.meals.lunch, action.newProduct],
      };
    case actionType.productAddedToDinner:
      return {
        ...state.meals,
        dinner: [...state.meals.dinner, action.newProduct],
      };
    case actionType.productAddedToSnacks:
      return {
        ...state.meals,
        snacks: [...state.meals.snacks, action.newProduct],
      };
    case actionType.productRemovedFromBreakfast:
      return {
        ...state.meals,
        breakfast: deleteProduct(state.meals.breakfast, action.productId),
      };
    case actionType.productRemovedFromLunch:
      return {
        ...state.meals,
        lunch: deleteProduct(state.meals.lunch, action.productId),
      };
    case actionType.productRemovedFromDinner:
      return {
        ...state.meals,
        dinner: deleteProduct(state.meals.dinner, action.productId),
      };
    case actionType.productRemovedFromSnacks:
      return {
        ...state.meals,
        snacks: deleteProduct(state.meals.snacks, action.productId),
      };
    case actionType.usersCurrentSumOfNutrient:
      return {
        ...state.meals,
        currentSum: calculateSumOfNutrients(state.meals),
      };
    default:
      return state.meals;
  }
};

export default updateMeals;
