const Buds = class {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  firstOne() {
    console.log(
      `my first buds it is playing songs very slow voice ${this.username} and ${this.email}`
    );
  }
};

const buds = new Buds("pk", "pk@google.com");
buds.firstOne();
