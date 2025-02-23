// try-catch & Error Handling
// The try-catch block is used to handle errors gracefully in JavaScript without crashing the program.
// Syntax
try {
    // Code that may cause an error
} catch (error) {
    // Handle the error
}

// Example 1: Handling a Synchronous Error

try {
    let num = 10;
    console.log(num.toUpperCase()); // This will cause an error
} catch (error) {
    console.error("An error occurred:", error.message); // Logs: "An error occurred: num.toUpperCase is not a function"
}


// Example 2: Handling an Undefined Variable

try {
    console.log(x); // 'x' is not defined
} catch (error) {
    console.error("Caught an error:", error.message); // Logs: "Caught an error: x is not defined"
}



// Example 3: Custom Error Throwing
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0)); // This will cause an error
} catch (error) {
    console.error("Error:", error.message);
}



