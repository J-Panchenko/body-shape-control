import { actionType } from '../constants';

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

export {
  getUserAge,
  getUserWeight,
  getUserCalories,
};
