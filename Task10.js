// Task 10: JavaScript Promises - Introduction, Detail & Revisited

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error("Seconds can't be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Time left: ${seconds} seconds`);
    }, 1500);
  });
}

checkTimeLeftPromise(5)
  .then((message) => console.log(message))
  .catch((err) => console.log("Promise error:", err.message));
