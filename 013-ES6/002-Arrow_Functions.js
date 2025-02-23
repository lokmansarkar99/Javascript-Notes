// Arrow Functions
// Arrow functions provide a shorter syntax and fix this binding.


const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Without parameters
const greet = () => console.log("Hello!");
greet(); // Hello!

// Single parameter (no need for parentheses)
const square = x => x * x;
console.log(square(4)); // 16
