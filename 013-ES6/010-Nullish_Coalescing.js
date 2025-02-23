// Nullish Coalescing (??)
// Returns the right-hand value only if the left-hand value is null or undefined (not 0, "", or false).

const value1 = null ?? "Default";
console.log(value1); // "Default"

const value2 = 0 ?? 10;
console.log(value2); // 0 (NOT 10 because 0 is a valid value)
