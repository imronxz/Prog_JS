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
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const request = fetch(`https://restcountries.com/v2/name/indonesia`);
console.log(request);

// TODO Async/Await MODERN
const getCountryData = function (country) {
  // TODO Country 1
  // * Attaches callbacks for the resolution and/or rejection of the Promise.
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json()) // JSON is new promises
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // TODO Country 2
      // * always return a promise and then handle it outside by simply returning it(.then)
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('usa');
// getCountryData('china');
// getCountryData('japan');
