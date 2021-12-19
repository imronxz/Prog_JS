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
  bookmarks: [],
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
    // * Set state bookmarks arrays: bookmark.id === id ?state.recipe.bookmarked true : false
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

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
    // * reset state page to 1, when new search is made
    state.search.page = 1;
  } catch (error) {
    console.error(`${error} 💥💥💥💥`);
    throw error;
  }
};

// TODO get search results page pagination
export const getSearchResultPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.pagination; // 0;.g  xxxxxxx                                               \

  const end = page * state.search.pagination; // 9
  // console.log(start, end);
  return state.search.results.slice(start, end);
};

// TODO get update servings
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

// *
const persistBookmark = function () {
  // * Save bookmarks to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// TODO add Bookmark
export const addBookmark = function (recipe) {
  // * add bookmark to state
  state.bookmarks.push(recipe);

  // * mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmark();
};

export const deleteBookmark = id => {
  // * delete bookmark from state
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // * mark current recipe as bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmark();
};

const init = function () {
  // * Get bookmarks from localStorage
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage); // convert string to object
};
init();

/* const clearBookmarks = function () {
  localStorage.clear('bookmarks');
}; */
// clearBookmarks();
