// Default Parameters
// Sets default values for function parameters.

const greet = (name = "Guest") => console.log(`Hello, ${name}!`);
greet(); // Hello, Guest!
greet("John"); // Hello, John!
