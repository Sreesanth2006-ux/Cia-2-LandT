// Task 11: Try/Catch Error Handling & Async/Await Concepts

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error("Duration cannot be negative"));
      return;
    }
    setTimeout(() => resolve(`Remaining time: ${seconds} seconds`), 1000);
  });
}

async function runCountdownAsync(seconds) {
  try {
    const result = await checkTimeLeftPromise(seconds);
    console.log("Success:", result);
  } catch (err) {
    console.log("Caught an error:", err.message);
  }
}

runCountdownAsync(5);   // succeeds
runCountdownAsync(-3);  // triggers the catch block
