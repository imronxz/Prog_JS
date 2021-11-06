// TODO setTimeout login
const startLogOutTimer = function () {
  // Set time to 5 Minutes
  let time = 120;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When the time is over, log out
    if (time === 0) {
      setInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1 second
    time--;
  };

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//TODO Login Event handlers
let currentAccount, timer;

// Clear timer currentAccount
if (timer) {
  clearInterval(timer);
}
// Logout timer
timer = startLogOutTimer();

// TODO Loan

// Reset timer
clearInterval(timer);
timer = startLogOutTimer();
