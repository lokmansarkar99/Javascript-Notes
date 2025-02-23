// Abstraction
// Abstraction involves hiding complex implementation details and exposing only the necessary functionality. It helps to reduce complexity and allows focusing on higher-level functionalities.

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // Public method exposes functionality while hiding implementation details
    start() {
      console.log('Car is starting...');
      this._engineStart(); // Internal engine start logic is hidden
    }
  
    // Private method
    _engineStart() {
      console.log('Engine is now running');
    }
  }
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.start(); // Output: Car is starting... Engine is now running
  