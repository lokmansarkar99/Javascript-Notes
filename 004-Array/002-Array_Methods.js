// Array Methods: map, filter, reduce, find, forEach, some, every, sort, splice, slice

let numbers = [1, 2, 3, 4, 5];

// map: Returns a new array with modified values
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// filter: Returns a new array with values that satisfy a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce: Accumulates values into a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// find: Returns the first element that matches a condition
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2

// forEach: Loops over elements (Does not return a new array)
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10

// some: Returns true if at least one element satisfies the condition
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// every: Returns true if all elements satisfy the condition
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// sort: Sorts array (by default, converts values to strings)
let unsorted = [4, 1, 10, 2];
unsorted.sort((a, b) => a - b);
console.log(unsorted); // Output: [1, 2, 4, 10]

// splice: Removes/adds elements at a specific index
let colors = ["Red", "Green", "Blue"];
colors.splice(1, 1, "Yellow"); // Removes "Green", adds "Yellow"
console.log(colors); // Output: ["Red", "Yellow", "Blue"]

// slice: Extracts a portion of an array
let sliced = colors.slice(0, 2);
console.log(sliced); // Output: ["Red", "Yellow"]
