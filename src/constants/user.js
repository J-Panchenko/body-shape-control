const user = {
  male: {
    genderName: 'male',
    ageFactor: 6.775,
    heightFactor: 5.003,
    weightFactor: 13.75,
    basicMetabolismFactor: 66.5,

  },
  female: {
    genderName: 'female',
    ageFactor: 4.676,
    heightFactor: 1.85,
    weightFactor: 9.563,
    basicMetabolismFactor: 655.1,
  },
  targetCalories: {
    forNormalWeightLoss: 0.83,
    forExtremeWeightLoss: 0.74,
    forNormalWeightGain: 1.2,
    forExtremeWeightGain: 1.36,
  },
};

export default user;
