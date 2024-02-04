class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  get w() {
    return this._w;
  }
  set w(val = 34) {
    this._w = val;
  }
}

let rect = new Rectangle(23, 67);
console.log(rect.w);
