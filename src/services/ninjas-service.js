export default class NinjasService {
  apiBase = 'https://api.api-ninjas.com/v1/nutrition?query=';

  options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Q4mNprkESFMH4gJ7FOmZEA==KkKmfyHx82G0suVk',
    },
  };

  getResource = async (food) => {
    const requestedFood = food.toLowerCase().split(' ').join('%20');
    const result = await fetch(`${this.apiBase}${requestedFood}`, this.options);

    if (!result.ok) {
      throw new Error(`Could not fetch ${this.apiBase}, received ${result.status}`);
    }

    const res = await result.json();

    return res;
  };

  getResultsOfSearch = async (food) => {
    const searchFood = await this.getResource(food);
    return searchFood.map((item) => ({
      foodName: item.name,
      calories: item.calories,
      servingSize: item.serving_size_g,
      protein: item.protein_g,
      fat: item.fat_total_g,
      carbohydrates: item.carbohydrates_total_g,
    }));
  };
}
