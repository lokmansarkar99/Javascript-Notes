// Arrow Functions (Concise syntax for functions)

// Regular function
const add = function(a, b) {
    return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(3, 5));      // Output: 8
console.log(addArrow(3, 5)); // Output: 8

// Arrow function without parameters
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

// Arrow function with single parameter
const square = num => num * num;
console.log(square(4)); // Output: 16
