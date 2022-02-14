import { actionType } from '../constants';

const updateWeightTarget = (state, action) => {
  if (state === undefined) {
    return {
      maintainWeight: 0,
      normalWeightLoss: 0,
      extremeWeightLoss: 0,
      normalWeightGain: 0,
      extremelWeightGain: 0,
    };
  }

  switch (action.type) {
    case actionType.maintainWeight:
      return {
        ...state.weightTarget,
        maintainWeight: action.payload,
      };
    case actionType.normalWeightLoss:
      return {
        ...state.weightTarget,
        normalWeightLoss: action.payload,
      };
    case actionType.extremeWeightLoss:
      return {
        ...state.weightTarget,
        extremeWeightLoss: action.payload,
      };
    case actionType.normalWeightGain:
      return {
        ...state.weightTarget,
        normalWeightGain: action.payload,
      };
    case actionType.extremeWeightGain:
      return {
        ...state.weightTarget,
        extremeWeightGain: action.payload,
      };
    default:
      return state.weightTarget;
  }
};

export default updateWeightTarget;
