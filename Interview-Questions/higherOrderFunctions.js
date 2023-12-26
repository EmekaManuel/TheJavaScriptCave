function operateOnNumbers(numbers, operation) {
  return numbers.map(operation);
}

// callback functions
function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
console.log(operateOnNumbers(numbers, square));
console.log(operateOnNumbers(numbers, double));

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const triple = multiplyBy(3);
console.log(triple); // returns an anonymous function
console.log(triple(5));
