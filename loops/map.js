const fahTemp = [23, 140, 212, 41];

const celTemp=fahTemp.map( (temp)=>{
    return (temp-32)*5/9;
} )

// console.log(celTemp);

const str = ['hello', 'world', 'javascript'];

const newStr=str.forEach( function(str) {
 console.log(str.toUpperCase())
});

// console.log(newStr);
