function outerfunction() {
  let outerVariable = "I am the outer variable";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closureExample = outerfunction();
closureExample();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
console.log(counter.count);
