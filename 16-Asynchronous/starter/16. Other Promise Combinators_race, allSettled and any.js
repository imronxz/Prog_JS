// TODO Other Promise Combinators_race, allSettled and any.js
'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// TODO Promise.race: only return fastest =>  1 data
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/indonesia`),
    getJSON(`https://restcountries.com/v3.1/name/japan`),
    getJSON(`https://restcountries.com/v3.1/name/china`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    /*
    setTimeout(function () {
      reject(new Error('Request timeout'));
    }, sec * 1000);
    */
    setTimeout(reject, sec * 1000, new Error('Request timeout'));
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/indonesia`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// TODO Promise.allSettled: return an array allSettled promises
/*
Promise.allSettled: Menerima semua hasil resolve dan reject dari seluruh promise yang diberikan.
*/
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Success2'),
]).then(res => console.log(res));

/* TODO Promise.all
Promise.all: Menerima semua hasil resolve dari seluruh promise yang diberikan, dan error saat reject.
*/
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Success2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
/* TODO Promise.any [ES2021]
Promise.any: apabila terdapat promise yg resolve maka = 'Success',
 apabila tidak terdapat hasil promise yg resolve maka = 'AggregateError: All promises were rejected'
*/
Promise.any([
  Promise.reject('ERROR'),
  Promise.resolve('Success'),
  //   Promise.resolve('Success2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); // AggregateError: All promises were rejected
