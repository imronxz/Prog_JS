'use strict';

// TODO First micro test
const simplePromise = new Promise(function (resolve, reject) {
  console.log('RNg from simplePromise');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('Success! greater than 0.5');
    } else {
      reject(new Error('Failure! lower than 0.5'));
    }
  }, 2000);
});
simplePromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// TODO Promisifying : convert callback base asynchronous behavior to promise base
/* const wait = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms * 1000);
  });
}; */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms * 1000));

wait(1)
  .then(() => {
    console.log('I waited for 1seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 4 second'));

// TODO Second micro test
Promise.resolve('You win 🎖').then(x => console.log(x)); // You win 🎖
Promise.reject(new Error('You lose 👎')).catch(x => console.error(x)); //Error: You lose 👎
