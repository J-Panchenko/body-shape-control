import { actionType } from '../constants';

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
  getMaintainWeight,
  getNormalWeightLoss,
  getExtremeWeightLoss,
  getNormalWeightGain,
  getExtremeWeightGain,
};
