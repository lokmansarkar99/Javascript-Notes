// Array Destructuring

let numbers = [10, 20, 30, 40];

// Extracting values
let [a, b] = numbers;
console.log(a, b); // Output: 10 20

// Skipping elements
let [, , third] = numbers;
console.log(third); // Output: 30

// Using default values
let [x, y, z = 100] = [1, 2];
console.log(x, y, z); // Output: 1 2 100

// Swapping values using destructuring
let p = 5, q = 10;
[p, q] = [q, p];
console.log(p, q); // Output: 10 5

// Nested array destructuring
let nestedArray = [1, [2, 3], 4];
let [first, [second, thirdValue], fourth] = nestedArray;
console.log(first, second, thirdValue, fourth); // Output: 1 2 3 4
