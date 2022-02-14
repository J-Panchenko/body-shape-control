const sumOfMealNutrients = (meals, key) => (
  meals.map((meal) => meal
    .reduce((a, b) => a + (b[key] || 0), 0))
    .reduce((a, b) => a + b, 0)
);

export default sumOfMealNutrients;
