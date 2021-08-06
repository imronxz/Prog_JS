if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}