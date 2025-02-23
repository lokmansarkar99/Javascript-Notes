// Function with a callback
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback("Data");
    }, 2000); // Simulating async operation
  }
  
  function processData(data) {
    console.log(`Processing: ${data}`);
  }
  
  // Using a callback to process data after fetching
  fetchData(processData);
  // Output after 2 seconds:
  // Data fetched
  // Processing: Data
  