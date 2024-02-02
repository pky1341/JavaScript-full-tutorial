/*
Create an async function that simulates fetching data from an API. Handle errors gracefully using try-catch and log an appropriate message for each scenario (e.g., network error, server error)
*/

async function fetchData() {
  try {
    const res = await fetch("https://api.github.com/users/pky1341");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await res.json();
    const follower = data.followers_url;
    const followerRes = await fetch(follower);
    const followerResJson = await followerRes.json();
    console.log(followerResJson);
  } catch (error) {
    console.log("Error:- ${error}");
  }
}

fetchData();
