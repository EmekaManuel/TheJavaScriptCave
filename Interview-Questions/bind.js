const originalFunc = function (greeting) {
  console.log(`${greeting}, ${this.name}!`);
};

const person = {
  name: "Manuel",
};

const boundfunction = originalFunc.bind(person, "Hello");
boundfunction();
