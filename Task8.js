// Task 8: Asynchronous Programming & Callback Functions

function checkTimeLeftCallback(seconds, callback) {
  setTimeout(() => {
    callback(null, seconds);
  }, 1500);
}

checkTimeLeftCallback(6, (err, timeLeft) => {
  if (err) {
    console.log("Something went wrong:", err);
    return;
  }
  console.log(`Time left reported by callback: ${timeLeft} seconds`);
});
