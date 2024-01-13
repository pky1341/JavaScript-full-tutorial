let arr=['apple','banana','cherry','manago'];

arr.forEach( (item,index)=>{
    // console.log(`${index} in this index ${item} `);
} )

const array = [
    { city: "Malden", population: 2200 },
    { city: "Chelsea", population: 3000 },
    { city: "Cambridge", population: 5400 }
  ];

// const population=array.map( item=>item.population );

// console.log(population);

const map=new Map();

map.set("In","india");
map.set("US","USA");
map.set("UK","Uninted Kingdom");

for (const value of map) {
    console.log(value);
}


