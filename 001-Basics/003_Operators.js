// Operators in JavaScript

// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus: 1
console.log(a ** b); // Exponentiation: 1000

// Assignment Operators
let x = 5;
x += 3;  // Equivalent to x = x + 3
console.log(x); // Output: 8

// Comparison Operators
console.log(10 == "10");  // true (loose equality)
console.log(10 === "10"); // false (strict equality)
console.log(10 != "10");  // false
console.log(10 !== "10"); // true
console.log(5 > 3);       // true
console.log(5 < 3);       // false

// Logical Operators
let p = true, q = false;
console.log(p && q);  // false (AND)
console.log(p || q);  // true  (OR)
console.log(!p);      // false (NOT)

// Bitwise Operators
console.log(5 & 1);  // Bitwise AND: 1
console.log(5 | 1);  // Bitwise OR: 5
console.log(5 ^ 1);  // Bitwise XOR: 4
console.log(~5);     // Bitwise NOT: -6
console.log(5 << 1); // Left shift: 10
console.log(5 >> 1); // Right shift: 2
