import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  // TODO render core function
  /**
   * Render the receive object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} [render=true] if false, create markup string instead of rendering the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {object} View instance
   * @author @imronxz
   * @todo Finish implementation
   */
  render(data, render = true) {
    // * if there is no data or there is data but that data isn't array and it is empty
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorUI();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // TODO update methods
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // * Replace old markup with new one
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Update changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // UPDATE changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
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
