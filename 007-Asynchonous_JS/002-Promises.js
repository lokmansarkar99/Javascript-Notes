// Creating a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Failed to fetch data");
        }
      }, 2000); // Simulating async operation
    });
  }
  
  // Using .then(), .catch(), and .finally()
  fetchData()
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.log(error); // Output: Failed to fetch data (if rejected)
    })
    .finally(() => {
      console.log("Operation completed"); // Always executed
    });
  