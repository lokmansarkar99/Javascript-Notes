// Callback Functions (Functions passed as arguments)

// Function with a callback
function processUserInput(name, callback) {
    console.log(`Processing user: ${name}`);
    callback();
}

// Callback function
function greetUser() {
    console.log("Welcome, user!");
}

// Using callback
processUserInput("Alice", greetUser);
