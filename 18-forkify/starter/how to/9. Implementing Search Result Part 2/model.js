import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

// TODO get recipe from API
export const loadRecipe = async function (id) {
  try {
    // TODO import getJSON from helpers.js
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
    console.log(state.recipe);
  } catch (err) {
    // * Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

// TODO get search results from API
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        image: recipe.image_url,
        publisher: recipe.publisher,
        title: recipe.title,
      };
    });

    /* TODO copilot
    const data = await getJSON(`${API_URL}/search?q=${query}`);
    const { results } = data.data;
    state.recipes = results.map((recipe) => ({
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title ,
    }));
    console.log(state.recipes);
    */
  } catch (error) {
    console.error(`${error} 💥💥💥💥`);
    throw error;
  }
};
