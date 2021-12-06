/* function fetchCountry(country) {
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(response => {
      if (!response.ok) throw new Error(`AAAAAAA`);

      return response.json();
    })
    .then(data => {
      console.log(data);

      if (data && 'status' in data) {
        throw new Error(data.message);
      }
    })
    .catch(e => {
      console.error(e);
    });
}

document
  .querySelector('#valid-country')
  .addEventListener('click', () => fetchCountry('US'));
document
  .querySelector('#invalid-country')
  .addEventListener('click', () => fetchCountry('FooBar'));
 */
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// TODO Insert to html

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// TODO Render error UI
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// TODO const getJSON
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// TODO Async/Await MODERN
const getCountryData = function (country) {
  // TODO Country 1
  // * then: Attaches callbacks for the resolution and/or rejection of the Promise.

  getJSON(
    `https://restcountries.com/v2/name/${country}?fullText=true`,
    'Country not found'
  )
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      // if (data && 'status' in data) {
      //   throw new Error(data.message);
      // }
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour Found!');

      // TODO Country 2
      // ? always return a promise and then handle it outside by simply returning it(.then)
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))

    //  * catch: callback for the rejection of the Promise. (error)
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })

    // * finally: callback for the completion of the Promise.
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => getCountryData('indonesia'));
// validCty.addEventListener('click', () => getCountryData('US'));
// invalidCty.addEventListener('click', () => getCountryData('whwhwhw'));
// getCountryData('australia');
