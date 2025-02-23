// Destructuring (Arrays & Objects)
// Extract values from objects & arrays easily.

// Array Destructuring

const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

// Skipping values
const [first, , third] = numbers;
console.log(first, third); // 10 30


// Object Destructuring

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25

// Renaming variables
const { name: fullName, age: years } = person;
console.log(fullName, years); // Alice 25
