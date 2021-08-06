'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const player1 = document.getElementById('current--0');
const player2 = document.getElementById('current--1');
const toggle1 = document.querySelector('.player--0');
const toggle2 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
//! Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  player1.textContent = 0;
  player2.textContent = 0;

  diceEl.classList.add('hidden');
  toggle1.classList.remove('player--winner');
  toggle2.classList.remove('player--winner');
  toggle1.classList.add('player--active');
  toggle2.classList.remove('player--active');
};
init();

// TODO! Switch Player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // jika benar activePlayer adlah 1 maka --> activePlayer = 2,
  // jika salah maka --> activePlayer = 1;
  activePlayer = activePlayer === 0 ? 1 : 0;
  toggle1.classList.toggle('player--active');
  toggle2.classList.toggle('player--active');
};

//! Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice rolling
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next layer
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add curret score to active player's score
    scores[activePlayer] += currentScore;
    // scores [1]= scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
