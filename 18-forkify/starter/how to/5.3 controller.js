import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // polyfill everything else
import 'regenerator-runtime/runtime'; // for polyfilling async/await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    alert(error);
  }
};
// controlRecipe();

// TODO Array contains eventHandler
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

// window, addEventListener('hashchange', controlRecipe);
// window, addEventListener('load', controlRecipe);
