// Creating and Manipulating Arrays

// Creating an array
let fruits = ["Apple", "Banana", "Mango"];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Modifying elements
fruits[1] = "Orange";
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

// Adding elements
fruits.push("Grapes"); // Adds at the end
console.log(fruits); // Output: ["Apple", "Orange", "Mango", "Grapes"]

fruits.unshift("Strawberry"); // Adds at the beginning
console.log(fruits); // Output: ["Strawberry", "Apple", "Orange", "Mango", "Grapes"]

// Removing elements
fruits.pop(); // Removes last element
console.log(fruits); // Output: ["Strawberry", "Apple", "Orange", "Mango"]

fruits.shift(); // Removes first element
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]
