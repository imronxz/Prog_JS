'use strict';

const getCountryData = country => {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  // XML Http Request function
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
            <h3 class="country__name">${data.name.nativeName.ind.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>🤼</>${+(
              data.population / 1000000
            ).toFixed(0)} Populasi</p>
            <p class="country__row"><span>💬</>${data.languages.ind}</p>
            <p class="country__row"><span>💵</>${data.currencies.IDR.symbol}</p>
      </div>
   </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('indonesia');
