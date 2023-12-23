const user = { 
  name: 'Alice', 
  address: { 
    city: 'Wonderland', 
    state: 'Dreamland' 
  } 
};

const {address:{city,state}}=user

console.log(city);
console.log(state);