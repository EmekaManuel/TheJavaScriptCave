// New keyword
function Person(name) {
  this.name = name;
}
const student = new Person("Manuel");
console.log(student.name);

// Apply, Call or Bind
function greet() {
  console.log(`Hello ${this.name}`);
}
const person = { name: "Manuel" };
greet.call(person);

//method invocation
const car = {
  brand: "GLK",
  getInfo: function () {
    console.log(`Brand is ${this.brand}`);
  },
};
car.getInfo();

//free function invocation
function showGlobal() {
  console.log(this); // In a browser, this may refer to the window object
}
showGlobal(); // this would return "undefined" in strict mode

// Arrow Functions
function regularFunction() {
  return function () {
    console.log(this);
  };
}
function arrowFunction() {
  return () => {
    console.log(this);
  };
}

const object = { prop: "English Language" };

const regularFunc = regularFunction.call(object);
regularFunc();
// Output: [object Window] (or undefined in strict mode)

const arrowFunc = arrowFunction.call(object);
arrowFunc();
// Output: { prop: 'I am an object!' }
