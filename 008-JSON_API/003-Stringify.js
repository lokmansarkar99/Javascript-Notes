// Stringifying JSON (JSON.stringify())
// JSON.stringify() is used to convert a JavaScript object into a JSON string. It is commonly used to send data to a server.

// Example of JSON.stringify():

// JavaScript object
const person = {
    name: "John Doe",
    age: 30,
    isEmployed: true
  };
  
  // Converting the JavaScript object into a JSON string
  const jsonString = JSON.stringify(person);
  
  console.log(jsonString);
  // Output: {"name":"John Doe","age":30,"isEmployed":true}
  