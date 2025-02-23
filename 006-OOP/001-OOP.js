// Classes and Objects
// A class is a blueprint for creating objects (instances), and objects are instances of classes. In OOP, classes encapsulate data for objects and define methods for actions that objects can perform.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const john = new Person('John', 30);
  john.greet(); // Output: Hello, my name is John and I am 30 years old.
  


//   Access Modifiers (Public and Private)
// JavaScript uses conventions to handle private and public properties/methods. # denotes private properties and methods in modern JavaScript (ES2022 and beyond).

class Rectangle {
    #width; // Private field
    #height; // Private field
  
    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }
  
    // Public method
    getArea() {
      return this.#width * this.#height;
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.getArea()); // Output: 50
  // console.log(rect.#width); // Error: Private field '#width' must be declared in an enclosing class
  
