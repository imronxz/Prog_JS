import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import bookmarkPanelView from './views/bookmarkPanelView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable'; // polyfill everything else
import 'regenerator-runtime/runtime'; // for polyfilling async/await
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

// TODO controller core function

// * 1) controlRecipe
const controlRecipe = async function () {
  try {
    // * linking event
    const id = window.location.hash.slice(1);
    // console.log(id);

    // * Checking id
    if (!id) return;

    // * spinner images from recipeView.js
    recipeView.renderSpinner();

    // * update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    // * update bookmarks panel views
    bookmarkPanelView.update(model.state.bookmarks);

    // * Loading recipe promises async/await
    await model.loadRecipe(id);

    // * Render recipe to UI from model.js and recipeView.js
    recipeView.render(model.state.recipe); // export default
    // const recipeView = new recipeView(model.state.recipe) // export Class
  } catch (error) {
    recipeView.renderErrorUI();
  }
};

// * 2) controlSearchResults
const controlSearchResults = async function () {
  try {
    // * render spinner to recipeView.js
    resultsView.renderSpinner();

    // * get query from searchView.js
    const query = searchView.getQuery();
    if (!query) return;

    // * clear input from searchView.js
    // await searchView.clearInput();

    // * load search results from model.js
    await model.loadSearchResults(query);

    // * render search results from model.js and searchView.js
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // * render pagination buttons to resultsView.js
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
    // searchView.renderErrorUI();
  }
};

// * 3) controlPagination
const controlPagination = goToPage => {
  try {
    console.log(goToPage);
    // * Render new Results
    resultsView.render(model.getSearchResultPage(goToPage));
    // * Render new Pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(error);
  }
};

// * 4) controlServings
const controlServings = function (newServings) {
  // * Update the recipe servings (in state)
  model.updateServings(newServings);

  // * Update the recipe view
  // recipeView.render(model.state.recipe);
  // FIXME update methods will only update text and att in DOM without re-rendering
  recipeView.update(model.state.recipe);
};

// * 5) controlAddBookmarks
const controlAddBookmark = function () {
  // * Add/delete bookmark to model.js
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // * Update the recipe view
  recipeView.update(model.state.recipe);

  // * render bookmark panel
  bookmarkPanelView.render(model.state.bookmarks);
};

// TODO init handlers event
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
