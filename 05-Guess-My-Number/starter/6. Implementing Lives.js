// TODO Lives = 5

lives = lives - 1;
document.querySelector('.lives').textContent = lives;
if (lives < 0) {
  document.querySelector('.lives').textContent = 0;
} else if (lives === 0) {
  let elem = document.querySelector('.again');
  elem.style.display = 'none';
  let elem1 = document.querySelector('.check');
  elem1.style.display = 'none';
  document.querySelector('h1').textContent = '??? You Lose 💩';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.number').style.color = 'red';
}
