// Inheritance
// Inheritance allows one class to inherit properties and methods from another class, enabling code reuse and creating a hierarchical class structure.

// Parent class (superclass)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Child class (subclass) inherits from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call parent constructor
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog('Max', 'Golden Retriever');
  dog.speak(); // Output: Max barks
  