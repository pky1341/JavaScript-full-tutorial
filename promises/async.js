/*
console.log("hello frieds");

setTimeout(function () {
  console.log("hi i am pradiep");
}, 3000);

console.log("hi");


function One() {
  console.log(`hello i am pradiep kumar`);
}

function Two(call_one) {
  console.log(`hi i am pradiep kumar`);
  call_one();
}

Two(One);
*/

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
  }, 2000);
  call_production();
};
let production = () => {
  setTimeout(function () {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
        setTimeout(() => {
          console.log("start the mchine");
          setTimeout(() => {
            console.log(`select container ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(
                `select toppings and utilize them ${stocks.toppings[0]} and ${stocks.toppings[1]} added`
              );
              setTimeout(() => {
                console.log("serve the Icecreams like this");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
