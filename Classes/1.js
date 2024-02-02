class Square {
  constructor(side) {
    this.side = side;
  }
  findPerimeter() {
    return 4 * this.side;
  }
}

let sqr = new Square(4);
console.log(sqr.findPerimeter());
