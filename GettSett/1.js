/*
Create an object representing a person with properties like firstName and lastName. Implement a getter that returns the full name when accessed
*/

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  get fname() {
    return this._fname;
  }
  set fname(val) {
    return (this._fname = val);
  }
}

let p1 = new Person("pradiep", "kummar");
console.log(p1);
