// Parsing JSON (JSON.parse())
// JSON.parse() is used to convert a JSON string into a JavaScript object. It allows you to read and manipulate the data stored in a JSON format.

// JSON string
const jsonString = '{"name": "John Doe", "age": 30, "isEmployed": true}';

// Parsing the JSON string to a JavaScript object
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj);
// Output: { name: 'John Doe', age: 30, isEmployed: true }

// Accessing properties of the object
console.log(jsonObj.name); // Output: John Doe
console.log(jsonObj.age);  // Output: 30
