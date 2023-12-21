const prompt=require("prompt-sync")({sigint:true});

function missNum(arr,n) {
    let total=((n+1)*(n+2))/2;
    let missing=total;

    for (let i = 0; i < n; i++) {
        missing=missing-arr[i];
    }
    return missing;
}

let n=prompt(`Enter length of Array:-`);
let arr=[];
console.log(`Enter a Array values:-`);

for (let i = 0; i < n; i++) {
    arr[i]=prompt();
}

console.log(`Your Array:- ${arr}`);
let newArr=Array.from(arr)
console.log(newArr);
myNewArr=newArr.map(Number);
console.log(myNewArr);

let missingNumber=missNum(myNewArr,myNewArr.length);
console.log(`your missing number this ${missingNumber}`);
