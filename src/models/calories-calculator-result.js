import { user } from '../constants';

const normalWeightLoss = (weight) => Math.round(weight * user.targetCalories.forNormalWeightLoss);
const extremeWeightLoss = (weight) => Math.round(weight * user.targetCalories.forExtremeWeightLoss);
const normalWeightGain = (weight) => Math.round(weight * user.targetCalories.forNormalWeightGain);
const extremeWeightGain = (weight) => Math.round(weight * user.targetCalories.forExtremeWeightGain);

export {
  normalWeightLoss,
  extremeWeightLoss,
  normalWeightGain,
  extremeWeightGain,
};
