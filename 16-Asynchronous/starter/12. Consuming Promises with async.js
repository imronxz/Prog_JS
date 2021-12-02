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

/////////////////////////////////////////////////

// TODO Get navigator geolocation
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// getPosition().then(pas => console.log(pas));

// TODO Create async/await function that will fetch the data from the API
const whereAmI = async function () {
  //  * Get the position
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // * Fetch the data from the API with async await
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  /* TODO same as bellow
  fetch(`https://restcountries.com/v2/name/${country}`).then(response =>
    console.log(response)
  );
  */
  //  * Country data
  const response = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );

  const data = await response.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');
