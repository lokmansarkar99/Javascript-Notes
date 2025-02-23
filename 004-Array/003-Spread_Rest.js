// Spread & Rest Operators

// Spread Operator (...): Expands an array or object
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

let obj1 = { name: "Alice", age: 25 };
let obj2 = { ...obj1, city: "New York" };
console.log(obj2); // Output: { name: "Alice", age: 25, city: "New York" }

// Rest Operator (...): Gathers remaining elements into an array
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Rest in Destructuring
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second); // Output: 10 20
console.log(rest); // Output: [30, 40, 50]
