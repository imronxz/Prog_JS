'use strict';
/*
TODO Selecting and Manipulating Element

document.querySelector('.message').textContent = `🍕 Correct Number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//TODO Handling Click Event

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let lives = 5;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayLives = function (lives) {
  document.querySelector('.lives').textContent = lives;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
    // When player win
  } else if (guess === secretNumber) {
    displayMessage('🧧 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    lives += 1;
    displayLives(lives);
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lose the game!');
      document.querySelector('.score').textContent = 0;
      lives -= 1;
      displayLives(lives);
      if (lives < 0) {
        displayLives(0);
      } else if (lives === 0) {
        let elem = document.querySelector('.again');
        elem.style.display = 'none';
        let elem1 = document.querySelector('.check');
        elem1.style.display = 'none';
        document.querySelector('h1').textContent = '??? You Lose 💩';

      }
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
// TODO Reset state
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
