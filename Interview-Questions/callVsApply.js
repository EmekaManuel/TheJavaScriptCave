function add(a, b) {
  return a + b;
}

//Call is comma separated
console.log(add.call(null, 1, 2)); // 3
//Apply is array like
console.log(add.apply(null, [1, 2])); // 3
