// Async function using await
async function fetchData() {
    const success = true;
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Failed to fetch data");
        }
      }, 2000); // Simulating async operation
    });
  
    try {
      const result = await data; // Waits for the promise to resolve
      console.log(result); // Output: Data fetched successfully
    } catch (error) {
      console.log(error); // Output: Failed to fetch data (if rejected)
    } finally {
      console.log("Operation completed"); // Always executed
    }
  }
  
  fetchData();
  