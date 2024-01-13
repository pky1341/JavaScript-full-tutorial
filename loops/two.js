// let people = [
//     {name: "aaron",age: 65},
//     {name: "beth",age: 2},
//     {name: "cara",age: 13},
//     {name: "daniel",age: 3},
//     {name: "ella",age: 25},
//     {name: "fin",age: 1},
//     {name: "george",age: 43},
// ]

// const toddler=people.filter( (number)=>number.age<=3 )

// console.log(toddler);

let team = [
	{
  		name: "aaron",
    	position: "developer"
 	 },
  	{
  		name: "beth",
    	position: "ui designer"
  	},
  	{
  		name: "cara",
    	position: "developer"
  	},
 	{
  		name: "daniel",
    	position: "content manager"
 	 },
  	{
  		name: "ella",
    	position: "cto"
  	},
  	{
  		name: "fin",
    	position: "backend engineer"
  	},
  	{
  		name: "george",
    	position: "developer"
  },

]

const teamer=team.filter( (emp,index,team)=> console.log(emp,index,team) );

// console.log(teamer);