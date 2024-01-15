let friend = [
    { name: 'Rachel', age: 24 },
    { name: 'David', age: 16 },
    { name: 'Aakash', age: 23 },
    { name: 'Franklin', age: 26 },
    { name: 'Ricky', age: 17 }
];

let filterFri=friend.filter( (items) => items.age>=18 );

let addAge=filterFri.reduce(  (acc,friend)=> acc+friend.age,0);

let ave=addAge/filterFri.length;

console.log(ave);


