'use script';

// TODO Return the function

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
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
  try {
    //  * Get the position
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // * Fetch the data from the API with async await
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    /* TODO same as bellow
    fetch(`https://restcountries.com/v2/name/${country}`).then(response =>
    console.log(response)
    );
    */
    //  * Country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country data');

    const data = await response.json();
    renderCountry(data[0]);
    // * Returning the value from Async Functions
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // * Reject promise returned from async function
    throw err;
  }
};
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);  // Promise {<pending>}

/* whereAmI()
  .then(city => console.log(`2: ${city}`)) //You are in Kabupaten Sarolangun, Indonesia
  .catch(err => console.error(`2: ${err.message} 💥`))
  .finally(() => console.log(`3: Finished getting location`)); */

// TODO Return the value from async Function
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log(`3: Finished getting location`);
})();
