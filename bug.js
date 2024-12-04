function foo(a, b) {
  if (a === 0 && b === 0) {
    return '00';
  } else if (a === 0) {
    return '0' + b;
  } else if (b === 0) {
    return a + '0';
  } else {
    return a + '' + b; // Implicit type coercion
  }
}

console.log(foo(0, 0)); // Output: "00"
console.log(foo(0, 1)); // Output: "01"
console.log(foo(1, 0)); // Output: "10"
console.log(foo(1, 2)); // Output: "12"