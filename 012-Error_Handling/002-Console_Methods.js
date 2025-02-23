// Console Methods
// Console methods help in debugging by logging useful information.

console.log("This is a normal log"); // Prints a message
console.warn("This is a warning!"); // Displays a warning message
console.error("This is an error!"); // Displays an error message





// Console Table

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
];

console.table(users); // Displays data in a tabular format



// Grouping Console Logs

console.group("User Info");
console.log("Name: John");
console.log("Age: 28");
console.groupEnd();



// Measuring Execution Time

console.time("LoopTime");

for (let i = 0; i < 1000000; i++) {} // Loop for performance test

console.timeEnd("LoopTime"); // Logs execution time



// Debugging with Browser DevTools
// Using debugger Statement

function testDebug() {
    let a = 10;
    let b = 20;
    debugger; // Execution stops here, allowing inspection in DevTools
    console.log(a + b);
}
testDebug();




// Pausing Execution Manually
// Open Chrome DevTools (F12 or Ctrl+Shift+I) → Go to Sources → Add breakpoints.

// Checking Network Requests

// Open DevTools → Network to inspect AJAX/fetch requests.
// Live Code Editing

// In DevTools → Sources, edit JavaScript in real time.
