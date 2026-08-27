// Task 9: Node Timers & Global Objects

let secondsLeft = 7;

// Fires once, exactly when the countdown should be finished
const notifyTimeout = setTimeout(() => {
  console.log("Notification: countdown has ended!");
}, secondsLeft * 1000);

// Ticks every second, clears itself the moment it hits zero
const tickInterval = setInterval(() => {
  console.log(`Countdown: ${secondsLeft}s`);

  if (secondsLeft === 0) {
    clearInterval(tickInterval);
    console.log("Interval cleared, countdown is over.");
    return;
  }
  secondsLeft--;
}, 1000);
