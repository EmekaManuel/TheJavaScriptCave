// ES5 Function Constructor
function PersonES5(name) {
  this.name = name;
}

function StudentES5(name, studentId) {
  PersonES5.call(this, name);
  this.studentId = studentId;
}

StudentES5.prototype = Object.create(StudentES5.prototype);

const personES5 = new PersonES5("John");
console.log(personES5); // PersonES5 { name: 'John' }

const studentES5 = new StudentES5("Alice", 123);
console.log(studentES5); // StudentES5 { name: 'Alice', studentId: 123 }

// ES6 Class
class PersonES6 {
  constructor(name) {
    this.name = name;
  }
}

class StudentES6 extends PersonES6 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
StudentES6.prototype.constructor = StudentES6;

const personES6 = new PersonES6("Bob");
console.log(personES6); // PersonES6 { name: 'Bob' }

const studentES6 = new StudentES6("Eve", 456);
console.log(studentES6); // StudentES6 { name: 'Eve', studentId: 456 }
