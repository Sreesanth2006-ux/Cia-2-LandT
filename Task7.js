// Task 7: Debugging Node Programs & Debugging Techniques
//
// This version is already fixed. The original bug and how it was found
// are documented below.

let secondsLeft = 4;

const timer = setInterval(() => {
  console.log("Seconds left:", secondsLeft);
  secondsLeft--;

  if (secondsLeft === 0) {
    clearInterval(timer);
    console.log("Reached zero!");
  }
}, 1000);

/*
Original bug:
  if (secondsLeft = 0) {   // assignment, not comparison
    ...
  }
  This overwrote secondsLeft with 0 every single tick and never behaved
  as a true condition, so the interval never stopped correctly.

How it was found and fixed:
  1. Ran `node --inspect Task7.js` and opened chrome://inspect.
  2. Set a breakpoint inside the setInterval callback.
  3. Watched the value of secondsLeft on each pass in the Scope panel and
     noticed it kept resetting to 0 instead of counting down.
  4. Corrected the single "=" to the strict equality operator "===".
*/
