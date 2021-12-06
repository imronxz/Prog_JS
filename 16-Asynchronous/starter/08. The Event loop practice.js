'use strict';

console.log('Start');
setTimeout(() => console.log('0 sec later'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('End');
/*
Result

1) Start
2) End
3) Resolved Promise 1
4) Resolved Promise 2
5) 0 sec later (Timer )

*/
