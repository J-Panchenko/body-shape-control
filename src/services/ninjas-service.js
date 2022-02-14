export default class NinjasService {
  apiBase = 'https://api.api-ninjas.com/v1/nutrition?query=';

  options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Q4mNprkESFMH4gJ7FOmZEA==KkKmfyHx82G0suVk',
    },
  };

  onParsedString = (str) => {
    const newString = str.toLowerCase().split(' ').join('%20');
    return newString;
  };

  getResource = async (food) => {
    const requestedFood = this.onParsedString(food);
    const result = await fetch(`${this.apiBase}${requestedFood}`, this.options);

    if (!result.ok) {
      throw new Error(`Could not fetch ${this.apiBase}, received ${result.status}`);
    }

    const res = await result.json();

    return res;
  };

  getResultsOfSearch = async (food) => {
    const res = await this.getResource(food);
    return res.map((item) => this.transformFood(item));
  };

  transformFood = (food) => {
    const result = {
      foodName: food.name,
      calories: food.calories,
      servingSize: food.serving_size_g,
      protein: food.protein_g,
      fat: food.fat_total_g,
      carbohydrates: food.carbohydrates_total_g,
    };
    return result;
  };
}
