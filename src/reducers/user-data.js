import { actionType } from '../constants';

const updateUserData = (state, action) => {
  if (state === undefined) {
    return {
      userAge: '',
      userWeight: '',
      userCalories: '',
    };
  }

  switch (action.type) {
    case actionType.userAge:
      return {
        ...state.userData,
        userAge: action.payload,
      };
    case actionType.userWeight:
      return {
        ...state.userData,
        userWeight: action.payload,
      };
    case actionType.userCalories:
      return {
        ...state.userData,
        userCalories: action.payload,
      };
    default:
      return state.userData;
  }
};

export default updateUserData;
