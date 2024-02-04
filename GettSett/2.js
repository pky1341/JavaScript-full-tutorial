/*
Add a setter for the age property that only allows setting a positive integer value. Implement error handling if an invalid value is provided.
*/

class Temperature {
  constructor() {
    this._celsius = 0;
  }

  set celsius(value) {
    if (value < -273.15) {
      this._celsius = -273.15;
    } else {
      this._celsius = value;
    }
  }
}

let tmp = new Temperature();
console.log(tmp);
