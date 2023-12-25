// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makesound = function () {
  console.log("The " + this.constructor.name + " makes a sound.");
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name);
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log("woof");
};

// Create a new instance of Dog.
const myPet = new Dog("Smokey");

// Call methods on the child object.
console.log(myPet.name); // Output: Smokey
myPet.makesound(); // Output: The Dog makes a sound
myPet.bark(); // Output: woof
