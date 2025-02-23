// Higher-Order Functions (Functions that take other functions as arguments or return functions)

// Function that takes a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

// Passing different functions as callbacks
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, sum));      // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15

// Function that returns a function
function createMultiplier(factor) {
    return num => num * factor;
}

const double = createMultiplier(2);
console.log(double(10)); // Output: 20
