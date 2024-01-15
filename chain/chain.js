const books = [
  { title: "A Smarter Way to Learn JavaScript", price: 19.95 },
  { title: "JavaScript: The Definitive Guide", price: 32.39 },
  { title: "Secrets of the JavaScript Ninja", price: 35.48 },
];
const maxPrice = 35;

const total = books
  .filter((book) => book.price <= maxPrice)
  .reduce((acc, num) => acc + num, 0);

console.log(total);
