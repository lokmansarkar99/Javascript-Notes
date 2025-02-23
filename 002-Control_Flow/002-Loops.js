// Loops in JavaScript

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// do-while loop (Executes at least once)
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);

// forEach loop (For arrays)
let numbers = [10, 20, 30, 40];
numbers.forEach(function (num) {
    console.log("Array Value:", num);
});

// for...of loop (For iterable objects like arrays, strings)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// for...in loop (For object properties)
let person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ":", person[key]);
}
