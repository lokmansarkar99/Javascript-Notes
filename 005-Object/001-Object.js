// Creating an object using object literal syntax
const person = {
    name: "John", // Property
    age: 30, // Property
    greet() { // Method
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  console.log(person.name); // Accessing a property
  person.greet(); // Calling the method
  