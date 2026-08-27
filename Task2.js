// Task 2: Understanding How Node.js Works & Node.js Architecture
//
// Node.js executes JavaScript on the V8 engine, which runs on a single
// main thread. Node pairs V8 with libuv, a C library that handles the
// event loop and offloads I/O (timers, file system, network) to a
// background thread pool. That's why a setTimeout can be "ticking" in
// the background while the main thread is free to keep running other
// code (or later, reading terminal input) at the same time.

console.log("Launching background timer...");

setTimeout(() => {
  console.log("Background timer complete!");
}, 3000);

console.log("Main thread keeps executing without waiting...");
