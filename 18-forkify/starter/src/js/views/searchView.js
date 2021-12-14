class SearchView {
  #parentElement = document.querySelector('.search');

  // TODO input search field
  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    // this.#clearInput();
    return query;
  }

  clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  // TODO eventHandlers in MVC, passing controlSearchResults() function as handler
  addHandlerSearch(handler) {
    // cannot render handler immediately, when we need submit a form we need to wait for event todo preventDefault action otherwise the page will get reload
    this.#parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
