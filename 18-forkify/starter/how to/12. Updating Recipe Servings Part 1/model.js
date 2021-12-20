import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    pagination: RES_PER_PAGE,
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
  } catch (error) {
    console.error(`${error} 💥💥💥💥`);
    throw error;
  }
};

// TODO get search results page pagination
export const getSearchResultPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.pagination; // 0;
  const end = page * state.search.pagination; // 9
  // console.log(start, end);
  return state.search.results.slice(start, end);
};

// TODO get update servings
export const updateServings = function (newServings) {
  // * Update servings in state
  state.recipe.servings = newServings;

  // * Update ingredients in state
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.count = ingredient.count * (newServings / state.recipe.servings);
  });
};
