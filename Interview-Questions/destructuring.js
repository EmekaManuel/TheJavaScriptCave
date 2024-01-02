const foo = ["one", "two", "three"];

const [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

// swapping variables
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

// object destructuring
const object = {
  myName: "Manuel",
  age: "21",
};
const { myName, age } = object;
console.log(myName);
console.log(age);
