// Break & Continue in Loops

// break statement (Stops the loop when condition is met)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Loop stopped at:", i);
        break; // Exits the loop
    }
    console.log(i);
}

// continue statement (Skips the current iteration and moves to the next)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping number:", i);
        continue; // Skips this iteration
    }
    console.log(i);
}
