const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("hello i am pradiep kumar");
    resolve();
  }, 9000);
});

promiseOne.then(function () {
  //   console.log("hello i am resolved");
});

const promiseTwo = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num >= 0.5) {
    resolve("success");
  } else {
    reject("error");
  }
});

promiseTwo
  .then((outcome) => console.log(outcome))
  .catch((outcome) => console.log(outcome))
  .finally(function () {
    console.log("hello i am done");
  });
