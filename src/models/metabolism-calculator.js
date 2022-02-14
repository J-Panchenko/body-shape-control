import user from '../constants/user';

const calculateMetabolism = (gender, age, height, weight, activValue) => {
  let basicMetabolism;
  let ageValue;
  let heightValue;
  let weightValue;

  if (gender === user.male.genderName) {
    ageValue = user.male.ageFactor * parseFloat(age);
    heightValue = user.male.heightFactor * parseFloat(height);
    weightValue = user.male.weightFactor * parseFloat(weight);
    basicMetabolism = user.male.basicMetabolismFactor + weightValue + heightValue - ageValue;
  }

  if (gender === user.female.genderName) {
    ageValue = user.female.ageFactor * parseFloat(age);
    heightValue = user.female.heightFactor * parseFloat(height);
    weightValue = user.female.weightFactor * parseFloat(weight);
    basicMetabolism = user.female.basicMetabolismFactor + weightValue + heightValue - ageValue;
  }

  return Math.round(basicMetabolism * parseFloat(activValue));
};

export default calculateMetabolism;
