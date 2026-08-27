// Task 5: Node Process Object, Command Line & Terminal I/O
//
// Run with:  node Task5.js 10
// process.argv[2] holds the first argument passed after the file name.

const inputSeconds = parseInt(process.argv[2]);

if (isNaN(inputSeconds) || inputSeconds <= 0) {
  console.log("Please enter a valid number of seconds as an argument.");
  process.exit(1);
}

console.log(`Starting a ${inputSeconds} second countdown.`);
console.log('Type "cancel" anytime and hit Enter to stop early.');

let secondsLeft = inputSeconds;

const timer = setInterval(() => {
  console.log(`${secondsLeft} seconds left`);
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(timer);
    console.log("Countdown complete!");
    process.stdin.pause();
  }
}, 1000);

// Listen for the word "cancel" typed into the terminal
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const text = data.toString().trim().toLowerCase();
  if (text === "cancel") {
    clearInterval(timer);
    console.log("Countdown was cancelled.");
    process.stdin.pause();
  }
});

process.stdin.resume();
