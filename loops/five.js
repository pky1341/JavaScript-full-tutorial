let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j] * 2;
  }
}

console.log(arr); 