import { actionType } from '../constants';

const addProductToBreakfast = (newProduct) => ({
  type: actionType.productAddedToBreakfast,
  newProduct,
});

const addProductToLunch = (newProduct) => ({
  type: actionType.productAddedToLunch,
  newProduct,
});

const addProductToDinner = (newProduct) => ({
  type: actionType.productAddedToDinner,
  newProduct,
});

const addProductToSnacks = (newProduct) => ({
  type: actionType.productAddedToSnacks,
  newProduct,
});

const removeProductFromBreakfast = (productId) => ({
  type: actionType.productRemovedFromBreakfast,
  productId,
});

const removeProductFromLunch = (productId) => ({
  type: actionType.productRemovedFromLunch,
  productId,
});

const removeProductFromDinner = (productId) => ({
  type: actionType.productRemovedFromDinner,
  productId,
});

const removeProductFromSnacks = (productId) => ({
  type: actionType.productRemovedFromSnacks,
  productId,
});

const calculateSumOfNutrients = () => ({
  type: actionType.usersCurrentSumOfNutrient,
});

export {
  addProductToBreakfast,
  addProductToLunch,
  addProductToDinner,
  addProductToSnacks,
  removeProductFromBreakfast,
  removeProductFromLunch,
  removeProductFromDinner,
  removeProductFromSnacks,
  calculateSumOfNutrients,
};
