const car = {
    brand: "Toyota",
    model: "Camry",
  };
  
  // Adding new property
  car.year = 2020;
  
  // Accessing properties
  console.log(car.brand); // Output: Toyota
  console.log(car["model"]); // Output: Camry
  


  const calculator = {
    add(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    }
  };
  
  console.log(calculator.add(2, 3)); // Output: 5
  console.log(calculator.multiply(2, 3)); // Output: 6
  