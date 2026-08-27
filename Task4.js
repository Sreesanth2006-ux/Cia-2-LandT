// Task 4: Node REPL Introduction
//
// This snippet was first tested directly in the Node REPL:
//   > const startTime = new Date();
//   > const endTime = new Date(startTime.getTime() + 8000);
//   > Math.round((endTime - startTime) / 1000)
//   8
//
// Once it worked, it was moved into this file.

const startTime = new Date();
const endTime = new Date(startTime.getTime() + 8000);

const diffInSeconds = Math.round((endTime - startTime) / 1000);
console.log(`Seconds between the two dates: ${diffInSeconds}`);
