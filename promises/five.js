/*
Implement a function that takes an array of URLs and returns a Promise that resolves to an array of responses from fetching each URL using fetch. Use Promise.all to handle multiple asynchronous requests simultaneously.
*/

function fetchURL(urls) {
  const promises = urls.map((url) => fetch(url));
  promises.json();
  return Promise.all(promises);
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

fetchURL(urls)
  .then((responses) => {
    console.log(responses);
  })
  .catch((error) => console.log(error));
