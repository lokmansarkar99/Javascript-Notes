// Data Types in JavaScript
// JavaScript has 7 primitive data types: String, Number, Boolean, Null, Undefined, Symbol, and BigInt

// String
let text = "Hello, JavaScript";
console.log(typeof text); // Output: string

// Number
let num = 42;
console.log(typeof num); // Output: number

// Boolean
let isTrue = true;
console.log(typeof isTrue); // Output: boolean

// Null (Intentional absence of value)
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (known JavaScript quirk)

// Undefined (Variable declared but not assigned a value)
let notAssigned;
console.log(typeof notAssigned); // Output: undefined

// Symbol (Unique and immutable primitive value)
let sym = Symbol("id");
console.log(typeof sym); // Output: symbol

// BigInt (For large integers beyond Number limits)
let bigNum = 9007199254740991n;
console.log(typeof bigNum); // Output: bigint
