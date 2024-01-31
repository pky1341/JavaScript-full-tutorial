let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};
let isShopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.fruits[3]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })
  .catch(() => {
    return order(1000, () => console.log("customer left"));
  });
