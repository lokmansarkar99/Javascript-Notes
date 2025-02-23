// Type Conversion & Type Coercion in JavaScript

// String to Number
let strNum = "123";
console.log(Number(strNum)); // Output: 123
console.log(parseInt(strNum)); // Output: 123
console.log(parseFloat("123.45")); // Output: 123.45

// Number to String
let numToStr = 456;
console.log(String(numToStr)); // Output: "456"
console.log(numToStr.toString()); // Output: "456"

// Boolean Conversion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

// Implicit Type Coercion
console.log("5" + 3);  // "53" (string concatenation)
console.log("5" - 3);  // 2 (automatic conversion to number)
console.log("5" * "2"); // 10 (both converted to numbers)
console.log("5" / "2"); // 2.5 (both converted to numbers)
console.log("5" + true); // "5true" (true converted to string)

// Explicit Conversion (Best Practice)
console.log(Number("10") + 5); // 15
console.log(String(20) + " years"); // "20 years"
console.log(Boolean(0)); // false
console.log(Boolean(100)); // true
