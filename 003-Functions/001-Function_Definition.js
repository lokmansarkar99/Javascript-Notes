// Function Declaration (Hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression (Not Hoisted)
const sayHello = function(name) {
    return `Hi, ${name}!`;
};
console.log(sayHello("Bob")); // Output: Hi, Bob!
