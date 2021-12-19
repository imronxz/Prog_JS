import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  // callback Event handler : Using handleEvent inside class
  constructor() {
    super();
    this._addHandlerShowWindows();
    this._addHandlerCloseWindows();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  // TODO Event Handler open ADD RECIPE navbar
  _addHandlerShowWindows() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  // TODO Event Handler close ADD RECIPE navbar
  _addHandlerCloseWindows() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = [...new FormData(this)];
      // * Returns an object created by key-value entries for properties and methods
      const data = Object.fromEntries(formData);
      handler(data);
    });
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
