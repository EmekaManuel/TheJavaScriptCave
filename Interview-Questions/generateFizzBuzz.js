const init = 1;
const final = 100;

for (let i = 1; i <= 100; i++) {
  let multipleOf3 = i % 3 === 0,
    multipleOf5 = i % 5 === 0;
  console.log(
    multipleOf3 ? (multipleOf5 ? "FizzBuzz" : "Fizz") : multipleOf5 ? "Buzz" : i
  );
}

// const init = 1;
// const final = 100;

for (let i = init; i <= final; i++) {
  const isMultipleOf3 = i % 3 === 0;
  const isMultipleOf5 = i % 5 === 0;

  if (isMultipleOf3 && isMultipleOf5) {
    console.log("FizzBuzz");
  } else if (isMultipleOf3) {
    console.log("Fizz");
  } else if (isMultipleOf5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
