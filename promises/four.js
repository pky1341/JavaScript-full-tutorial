/*Write a function that returns a Promise. Use this function to fetch data from two different APIs sequentially. Log the results of both API calls after they are completed.*/

function apiSeq() {
  firstAPI("https://api.github.com/users/AayanshSingh07");
  secondAPI("https://api.github.com/users/pky1341");
}

async function firstAPI(api1) {
  try {
    const res = await fetch(api1);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("E1:", error);
  }
}
async function secondAPI(api2) {
  try {
    const res = await fetch(api2);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("E2", error);
  }
}

apiSeq();
