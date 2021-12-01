'use strict';
const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
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
          ).toFixed(1)} Orang</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = () =>
  new Promise((resolve, reject) => {
    /* navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    ); */
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

getPosition().then(pas => console.log(pas));

const whereAmI = () => {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`${error} 💥💥💥`));
};

btn.addEventListener('click', whereAmI);
