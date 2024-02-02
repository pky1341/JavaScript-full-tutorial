/*
Write a series of async functions that perform different operations (e.g., validate data, fetch from an API, process data). Compose these functions to execute sequentially and log the final result
*/

function resolveOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
    }, 1000);
  });
}

function resolveTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
    }, 2000);
  });
}
