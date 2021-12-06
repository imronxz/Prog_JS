'use strict';
// TODO getJSON Promises
/*
variable getJSON is a function that takes an argument, url and errorMsg
The function returns a promise. -> which is fetch url -> then return the data response

*/
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// TODO Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`); */
    //     console.log([data1.capital, data2.capital, data3.capital]);
    // TODO Promise in Parallel
    // * Promise.all: Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    //* map: Calls a defined callback function on each element of an array, and returns an array that contains the results.
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.log(error);
  }
};
get3Countries('Indonesia', 'Japan', 'China');
