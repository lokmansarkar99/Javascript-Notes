// Spread & Rest Operators
// 🔹 Spread (...) - Expands elements

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Copying array
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Copying object
console.log(obj2); // { a: 1, b: 2, c: 3 }



// Rest (...) - Collects remaining elements

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // 10
