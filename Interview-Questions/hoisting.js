// variable hoisting with var
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// function hoisting (function declarations)
console.log(foo); // [Function: foo]
foo(); // FOO
function foo() {
  console.log("FOO");
}
console.log(foo); // [Function: foo]

// For function declarations, both the declaration and the body are hoisted to the top of the scope.
// That's why you can call foo() before the actual declaration in the code.

// function hoisting (function expressions)
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log("BARRRR");
};
console.log(bar); // [Function: bar]

// However, for function expressions, only the declaration (var bar;) is hoisted, not the assignment.
// Therefore, calling bar() before the assignment results in a TypeError.

// Hoisting with let and const
x; // undefined
y; // Reference error: y is not defined

var x = "local";
let y = "local";
