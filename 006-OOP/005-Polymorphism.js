// Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also allows the same method to behave differently based on the object that invokes it.

class Animal {
    speak() {
      console.log('Animal makes a sound');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Dog barks');
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log('Cat meows');
    }
  }
  
  const animal = new Animal();
  const dog = new Dog();
  const cat = new Cat();
  
  const animals = [animal, dog, cat];
  
  animals.forEach(animal => animal.speak());
  // Output:
  // Animal makes a sound
  // Dog barks
  // Cat meows
  