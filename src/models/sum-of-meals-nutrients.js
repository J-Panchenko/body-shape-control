const sumOfMealNutrients = (meals, key) => {
  const res = meals.map((meal) => meal
    .reduce((a, b) => a + (b[key] || 0), 0))
    .reduce((a, b) => a + b, 0);
  return res;
};

export default sumOfMealNutrients;
