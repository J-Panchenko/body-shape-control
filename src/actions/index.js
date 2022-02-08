import { actionType } from '../constants';
import {
  getMaintainWeight,
  getNormalWeightLoss,
  getExtremeWeightLoss,
  getNormalWeightGain,
  getExtremeWeightGain,
} from './weight-target';

import {
  getUserAge,
  getUserWeight,
  getUserCalories,
} from './user-data';

import {
  addProductToBreakfast,
  addProductToLunch,
  addProductToDinner,
  addProductToSnacks,
  removeProductFromBreakfast,
  removeProductFromLunch,
  removeProductFromDinner,
  removeProductFromSnacks,
} from './meals';

const onClearCalorieCalculator = () => ({
  type: actionType.clearCalorieCalculator,
});

export {
  onClearCalorieCalculator,
  getUserAge,
  getUserWeight,
  getUserCalories,
  getMaintainWeight,
  getNormalWeightLoss,
  getExtremeWeightLoss,
  getNormalWeightGain,
  getExtremeWeightGain,
  addProductToBreakfast,
  addProductToLunch,
  addProductToDinner,
  addProductToSnacks,
  removeProductFromBreakfast,
  removeProductFromLunch,
  removeProductFromDinner,
  removeProductFromSnacks,
};
