// Variables in JavaScript
// Variables store data values. JavaScript has three ways to declare variables: var, let, and const.

// var (Function-scoped, can be re-declared & updated, hoisted)
var name = "John";
console.log(name); // Output: John

var name = "Doe"; // Re-declaration allowed
console.log(name); // Output: Doe

// let (Block-scoped, cannot be re-declared but can be updated)
let age = 25;
console.log(age); // Output: 25

age = 26; // Allowed (updating value)
console.log(age); // Output: 26

// let age = 30; // Error: Cannot redeclare block-scoped variable

// const (Block-scoped, cannot be re-declared or updated)
const country = "USA";
console.log(country); // Output: USA

// country = "Canada"; // Error: Assignment to constant variable

// Best Practices:
// - Use 'const' by default unless you need to reassign.
// - Use 'let' if reassignment is needed.
// - Avoid 'var' due to scoping issues.

// Example: Using let in a block scope
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined (Block Scoped)

// Example: Hoisting with var
console.log(y); // Output: undefined (Hoisted but not initialized)
var y = 5;
