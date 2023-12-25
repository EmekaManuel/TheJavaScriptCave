// Creating a simple object
const parentObject = {
  greet: function () {
    console.log("Hello!");
  },
};

// Creating a child object that inherits from the parentObject
const childObject = Object.create(parentObject);

// Adding a property to the childObject
childObject.name = "John";

// Accessing a property on the childObject
console.log(childObject.name); // Output: John

// Accessing a method on the childObject, which is inherited from the parentObject
childObject.greet(); // Output: Hello!
