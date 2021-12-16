import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  // TODO render core function
  render(data) {
    // * if there is no data or there is data but that data isn't array and it is empty
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorUI();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // TODO clear HTML
  _clear() {
    this._parentElement.innerHTML = '';
  }

  // TODO Render Spinner
  renderSpinner() {
    const spinnerHtml = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', spinnerHtml);
  }

  // TODO rendering error to UI
  renderErrorUI(message = this._errorMessage) {
    const errorHtml = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', errorHtml);
  }
  // TODO rendering success to IO
  renderSuccessUI(message = this._successMessage) {
    const successHtml = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', successHtml);
  }
}
