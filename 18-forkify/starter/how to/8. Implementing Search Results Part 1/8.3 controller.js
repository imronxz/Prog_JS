import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable'; // polyfill everything else
import 'regenerator-runtime/runtime'; // for polyfilling async/await

// TODO controller core function
const controlRecipe = async function () {
  try {
    // * linking event
    const id = window.location.hash.slice(1);
    // console.log(id);

    // * Checking id
    if (!id) return;

    // * spinner images from recipeView.js
    recipeView.renderSpinner();

    // * Loading recipe promises async/await
    await model.loadRecipe(id);
    // const { recipe } = model.state; //checking model {recipe}

    // * Render recipe to UI from model.js and recipeView.js
    recipeView.render(model.state.recipe); // export default
    // const recipeView = new recipeView(model.state.recipe) // export Class
  } catch (error) {
    recipeView.renderErrorUI();
  }
};

const controlSearchResults = async function () {
  try {
    // * get query from searchView.js
    const query = searchView.getQuery();
    if (!query) return;

    // * clear input from searchView.js
    await searchView.clearInput();

    // * load search results from model.js
    await model.loadSearchResults(query);

    // * render search results from model.js and searchView.js
    console.log(model.state.search.results);
  } catch (error) {
    // console.log(error);
    searchView.renderErrorUI();
  }
};

// TODO init handlers event
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
