// Task 3: Node.js Resources & Working with Node.js Examples
//
// Docs referenced: https://nodejs.org/api/timers.html
// Methods used from the timers module:
//   - setInterval(callback, delay)
//   - clearInterval(intervalObject)
//
// Adapted from the official setInterval example to build a basic countdown.

let secondsLeft = 6;

const countdownTimer = setInterval(() => {
  console.log(`Seconds left: ${secondsLeft}`);
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(countdownTimer);
    console.log("Done counting down!");
  }
}, 1000);
