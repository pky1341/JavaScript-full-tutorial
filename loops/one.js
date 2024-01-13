const numbers=[9,8,7,6,5,4,3,2];

numbers.forEach((number)=>{
    // console.log(number+1);
});

const isOdd=numbers.filter((number)=> number%2!==0);

// console.log(isOdd);

const newArr=numbers.map( (number)=> number+1 );

// console.log(newArr);

const total=numbers.reduce( (sum,number)=>sum+number );

console.log(total);
