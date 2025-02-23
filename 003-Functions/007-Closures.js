// Closures (Functions that retain access to their outer scope)

// Outer function
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return `Outer: ${outerValue}, Inner: ${innerValue}`;
    };
}

// Creating closures
const closure1 = outerFunction("Hello");
console.log(closure1("World")); // Output: Outer: Hello, Inner: World

// Example: Counter using closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
