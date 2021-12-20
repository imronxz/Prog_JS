import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      // * event delegation : e.target.closest
      const btn = e.target.closest('.btn--inline'); // * closest() : find the closest element
      if (!btn) return;
      const goToPage = +btn.dataset.goto; // * + to convert string to number

      handler(goToPage); // * pass goToPage to handler
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;

    // TODO Page 1, and there are other pages
    const numPages = Math.ceil(
      this._data.results.length / this._data.pagination
    );
    console.log(numPages);
    // TODO Page 1, and there are NO other pages
    if (curPage === 1 && numPages > 1)
      return `
          <button class="btn--inline pagination__btn--next" data-goto="${
            curPage + 1
          }">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;

    // Last page
    if (curPage === numPages && numPages > 1)
      return `
          <button class="btn--inline pagination__btn--prev" data-goto="${
            curPage - 1
          }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
          </button>
        `;

    // Other page
    if (curPage < numPages)
      return `
          <button class="btn--inline pagination__btn--prev" data-goto="${
            curPage - 1
          }" >
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--next" data-goto="${
            curPage + 1
          }" >
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    // Page 1, and there are NO other pages
    return '';
  }
  // refactoring next and previous button _generateMarkup()
}
export default new PaginationView();
