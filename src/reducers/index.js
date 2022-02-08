import { actionType } from '../constants';
import updateMeals from './meals';
import updateUserData from './user-data';
import updateWeightTarget from './weight-target';

// add find out target value result in Global state

const reducer = (state, action) => {
  if (action.type === actionType.clearCalorieCalculator) {
    return {
      userData: updateUserData(undefined, action),
      weightTarget: updateWeightTarget(undefined, action),
      meals: updateMeals(state, action),
    };
  }
  return {
    userData: updateUserData(state, action),
    weightTarget: updateWeightTarget(state, action),
    meals: updateMeals(state, action),
  };
};

export default reducer;
