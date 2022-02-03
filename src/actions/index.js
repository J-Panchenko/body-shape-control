import { actionType } from '../constants';

const onClearCalorieCalculator = () => ({
  type: actionType.clearCalorieCalculator,
});

const getUserAge = (value) => ({
  type: actionType.userAge,
  payload: value,
});

const getUserWeight = (value) => ({
  type: actionType.userWeight,
  payload: value,
});

const getUserCalories = (value) => ({
  type: actionType.userCalories,
  payload: value,
});

const getMaintainWeight = (value) => ({
  type: actionType.maintainWeight,
  payload: value,
});

const getNormalWeightLoss = (value) => ({
  type: actionType.normalWeightLoss,
  payload: value,
});

const getExtremeWeightLoss = (value) => ({
  type: actionType.extremeWeightLoss,
  payload: value,
});

const getNormalWeightGain = (value) => ({
  type: actionType.normalWeightGain,
  payload: value,
});

const getExtremeWeightGain = (value) => ({
  type: actionType.extremeWeightGain,
  payload: value,
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
};
