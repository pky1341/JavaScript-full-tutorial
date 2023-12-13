const prompt=require("prompt-sync")({sigint:true});

function findSqrt(n) {
  let i = 1;
  let found = false;
  while (!found) {
    if (i * i === n) {
      return i;
    } else if (i * i > n) {
      found = true;
    } else {
      i++;
    }
  }
  let low = i - 1;
  let high = i;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let mul = mid * mid;
    if (mul === n) {
      return mid;
    } else if (mul < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const num=prompt("please give any number:-");
console.log(findSqrt(num));