import { actionType } from '../constants';

const initialState = {
  userAge: null,
  userWeight: null,
  userCalories: null,
  maintainWeight: 0,
  normalWeightLoss: 0,
  extremeWeightLoss: 0,
  normalWeightGain: 0,
  extremelWeightGain: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.clearCalorieCalculator:
      return initialState;
    case actionType.userAge:
      return {
        ...state,
        userAge: action.payload,
      };
    case actionType.userWeight:
      return {
        ...state,
        userWeight: action.payload,
      };
    case actionType.userCalories:
      return {
        ...state,
        userCalories: action.payload,
      };
    case actionType.maintainWeight:
      return {
        ...state,
        maintainWeight: action.payload,
      };
    case actionType.normalWeightLoss:
      return {
        ...state,
        normalWeightLoss: action.payload,
      };
    case actionType.extremeWeightLoss:
      return {
        ...state,
        extremeWeightLoss: action.payload,
      };
    case actionType.normalWeightGain:
      return {
        ...state,
        normalWeightGain: action.payload,
      };
    case actionType.extremeWeightGain:
      return {
        ...state,
        extremeWeightGain: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
