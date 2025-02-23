// Function Hoisting (Only function declarations are hoisted)

console.log(hoistedFunction()); // Output: "I am hoisted!"

function hoistedFunction() {
    return "I am hoisted!";
}

// Function expression is not hoisted
// console.log(nonHoistedFunction()); // Error: Cannot access before initialization
const nonHoistedFunction = function() {
    return "I am NOT hoisted!";
};
