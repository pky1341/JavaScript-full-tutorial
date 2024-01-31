/*
Create a simple Promise that resolves after 2 seconds with the message "Promise resolved successfully." Handle both the success and error cases
*/
const promise = new Promise(function (resolve, reject) {
  let isTrue = true;
  if (isTrue) {
    setTimeout(function () {
      resolve("Promise resolved successfully.");
    }, 2000);
  } else {
    reject("error");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("the end of program first");
  });

/*
  Write a function that returns a Promise. Use this function to fetch data from two different APIs sequentially. Log the results of both API calls after they are completed.
*/

function fetchSequentially() {
  return fetch("https://api.github.com/users/pky1341")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return fetch("https://api.github.com/users/krishna2003p");
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

fetchSequentially();
