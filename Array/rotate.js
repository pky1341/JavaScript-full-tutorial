function rotateArray(arr, d) {
    let temp = [];
    for (let i = arr.length - d; i < arr.length; i++) {
        temp.push(arr[i]);
    }
    for (let i = 0; i < arr.length - d; i++) {
        temp.push(arr[i]);
    }
    return temp;
}

let arr=[8,7,6,5,4,3,2];

console.log(arr,4);