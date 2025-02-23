// Constructor function to create an object
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  const person1 = new Person('Alice', 25);
  person1.greet(); // Calling method
  