function primeFactors(n) {
  var factors = [];
  let divisor = 2;

  while (divisor <= n) {
    if (n % divisor === 0) {
      console.log(`${n} is greater than the divisor`);
      factors.push(divisor);
      console.log(` this is the state  ${factors}`);
      n /= divisor;
      console.log(n);
    } else {
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(30));
