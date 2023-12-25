const numbers = [1, 2, 3];

numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});

const numberArray = [1, 2, 3];

const doubled = numberArray.map((num) => {
  return num * 2;
});
console.log(doubled);
