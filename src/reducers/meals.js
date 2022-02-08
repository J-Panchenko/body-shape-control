import { actionType } from '../constants';

const deleteProduct = (meal, productId) => {
  const productIndex = meal.findIndex(({ id }) => id === productId);
  const newList = [
    ...meal.slice(0, productIndex),
    ...meal.slice(productIndex + 1),
  ];
  return newList;
};

const updateMeals = (state, action) => {
  if (state === undefined) {
    return {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
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
    default:
      return state.meals;
  }
};

export default updateMeals;
