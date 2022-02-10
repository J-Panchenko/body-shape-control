const texts = {
  homePage: {
    introduction: 'Counting calories all the time is not necessary, but in the beginning, it may help to determine how many calories are in the foods and drinks you consume regularly.',
    calories: {
      link: 'See Calorie Calculator',
      text: ' to determine how many calories a day you need to various weight goals based on your age, sex, height, weight, and physical activity level. Then click on the "Calculate" to see recommended daily amounts calories.',
    },
    meals: {
      link: 'See Daily Meal Plan',
      text: ' to learn how many calories you are taking in, write down the foods you eat and the beverages you drink. Be sure to use the calculator to determine the nutrient ratio for your goals. Focus on its results when you make up your daily diet.',
    },
    water: {
      text: 'Lastly, don\'t forget about the water balance. Find out how much fluid you need! ',
      link: 'See Water Goal Calculator.',
    },
    conclusion: 'Made with love...',
  },
  caloriesResult: [
    'Your choice: ',
    'Select one of these options to use this number of calories in the Daily Meal Calculator on',
    ' the next page.',
  ],
  prefaceMealPlan: [
    'Tracking your food and drink intake can help you become more aware of your eating habits. It help you build healthy habits and reach your weight goals.',
    'We recommend using our Daily Meal Calculator to find out how much to eat per day! Or you can just use the Meal Planner if you know your protein, fat and carbs ratios. Let\'s start!',
  ],
  caloriesGoal: 'How many calories do you plan to consume per day?',
  nutrientRatioText: [
    'What ratio of protein, fat and carbohydrates in the diet do you prefer?',
    '(protein/fat/carbs % of calories)',
    'Use your own nutrient ratio (total - 100%) Percent of:',
  ],
  mealPlanner: [
    'Your Corrent Meal Plan',
    'What are you going to eat?',
  ],
  prefaceWaterGoal: [
    'The body constantly loses water throughout the day, mostly through urine and sweat but also from regular body functions like breathing. To prevent dehydration, you need to get plenty of water from drink and food every day.',
    'Use this Water Goal Calculator to learn how much water you should drink daily based on your age, weight and other factors.',
  ],
  waterGoal: [
    'Factors affecting the daily need for water:',
    'exercising, hiking, physical job (anything that makes your heart rate increase), pregnancy and breast-feeding, diabetes, warm or hot climate',
    'I usually have one or more factors during the day.',
  ],
  waterGoalResult: [
    'It is recommended that you drink: ',
    ' milliliters of water per day.',
    'liters',
    '(1000ml)',
    'glassful',
    '(250ml)',
  ],
  mealsName: {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snacks: 'Snacks',
  },
  errorMessage: {
    global: [
      'Oops!',
      'Something went wrong!',
    ],
    empty: '* Enter a value in the empty field, please.',
    greater: '* The sum of the entered values is greater than 100%. Fix it!',
    less: '* The sum of the entered values is less than 100%. Fix it!',
    foodNoSearch: '* Nothing found. Try another name, please!',
    foodNoCorrectly: '* Nothing found. Try to search in English, please!',

  },
};

export default texts;
