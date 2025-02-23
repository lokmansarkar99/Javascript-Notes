function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person('John', 30);
  john.greet(); // Output: Hello, my name is John
  


//   Inheritance via Prototypes
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
  }
  
  // Inheriting from Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  const dog = new Dog('Max', 'Golden Retriever');
  dog.speak(); // Output: Max makes a sound
  