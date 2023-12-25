const ConceptDefinition =
  "The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.";

// First example
function greeting() {
  sayHi();
}
function sayHi() {
  console.log("Hi");
}
greeting();

// second example
function foo() {
  throw new Error("SessionStack will help you resolve crashes :)");
}
function bar() {
  foo();
}
function start() {
  bar();
}
start();
