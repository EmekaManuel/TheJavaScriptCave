// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

let john = {
  name: "John",
  sayHi: function () {
    console.log("Hi buddy!");
  },
};

john.sayHi();

// Not everything in JavaScript is an object
// There are 6 primitive types in JavaScript
// Everything that's not a primitive type is an object
// Functions are just a special type of object
// Functions can be used to create new objects
// Strings, booleans and numbers can be represented as a primitive type but also as an object
// Certain primitive types (strings, numbers, booleans) appear to behave like objects because of a JavaScript featured called autoboxing.

// OBJECTS
// Create an empty generic object
var obj = new Object();
// Create a user defined object
// var mycar = new Car();

let person = {
  name: "manuel",
  age: 10,
};
console.log(person.name);

// Anything that is not a primitive type, is an Object, and this includes functions and arrays.
// Primitive types
true instanceof Object; // false
null instanceof Object; // false
undefined instanceof Object; // false
0 instanceof Object; // false
"bar" instanceof Object; // false

// Non-primitive types
const foo = function () {};
foo instanceof Object; // true

//Primitive types are immutable
const answer = "hello";
answer.foo = 42;
console.log(answer.foo); // return undefined

// Primitive types are stored by value, objects are stored by reference
// "dog" === "dog"; // true
14 === 14; // true

//{} === {}; // false
//[] === []; // false
//(function () {}) === function () {}; // false

const fooo = function (baz) {};
foo.bar = "baz";
console.log(foo.bar);
console.log(foo.name);
console.log(foo.length);
