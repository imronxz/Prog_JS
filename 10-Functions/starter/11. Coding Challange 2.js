'use strict';

// CODING CHALLENGE 3
/*
This is more of a thinking challenge than a coding challenge

Take the IIFE bellow and at the end of the function, attach an event listener
that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again.

And now explain to YOURSELF (or someone around you) why this worked! Take all
the time you need. Think about WHEN exactly the callback function is executed,
and what that means for the variables involved in this example.

GOOD LUCK

*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // Whenever callback was invoke will remove old function
  // And closures is carrying header variables
  // addEventListener is highOrderFunction
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'; //* Callback function
  });
})(); // IIFE methods immediately invoke function expressions
