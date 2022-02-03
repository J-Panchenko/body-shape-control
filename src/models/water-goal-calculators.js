import { water } from '../constants';

const getWaterGoalInML = (age, weight, factor) => {
  const waterMin = Math.ceil(weight * water.min);
  const waterMid = Math.ceil(weight * water.mid);
  const waterMax = Math.ceil(weight * water.max);

  if (age > water.significantAge) {
    if (factor) {
      return waterMid;
    }
    return waterMin;
  }
  if (factor) {
    return waterMax;
  }
  return waterMid;
};

const getWaterGoalInLiters = (age, weight, factor) => {
  const ml = getWaterGoalInML(age, weight, factor);
  const liters = (ml / water.literToML).toFixed(2);
  return parseFloat(liters);
};

const getGlassesOfWater = (age, weight, factor) => {
  const ml = getWaterGoalInML(age, weight, factor);
  const quantityOfGlasses = Math.floor(ml / water.oneGlassML);
  if (ml % water.oneGlassML >= water.halfGlassML) {
    return quantityOfGlasses + water.halfOfGlass;
  }
  return quantityOfGlasses;
};

export {
  getWaterGoalInML,
  getWaterGoalInLiters,
  getGlassesOfWater,
};
