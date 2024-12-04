function foo(a, b) {
  return String(a) + String(b);
}

console.log(foo(0, 0)); // Output: "00"
console.log(foo(0, 1)); // Output: "01"
console.log(foo(1, 0)); // Output: "10"
console.log(foo(1, 2)); // Output: "12"
console.log(foo(0, 'abc')); //Output: "0abc"
console.log(foo('abc', 0)); //Output: "abc0"