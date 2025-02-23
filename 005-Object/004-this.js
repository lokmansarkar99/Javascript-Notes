const person = {
    name: "John",
    greet() {
      console.log(`Hello, my name is ${this.name}`); // `this` refers to the object person
    }
  };
  
  person.greet(); // Output: Hello, my name is John
  


  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
      console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const john = new Person('John', 30);
  john.introduce(); // Output: Hi, I'm John and I am 30 years old.
  