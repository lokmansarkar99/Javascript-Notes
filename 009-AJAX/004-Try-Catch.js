// Error Handling (try-catch, .catch())
// Error handling is essential when working with asynchronous operations like fetching data from APIs. You can handle errors using try-catch blocks (with async/await) or .catch() for promises.

// Example of Error Handling with try-catch (async/await):


async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parsing the response as JSON
      console.log(data); // Handling the response data
    } catch (error) {
      console.error('There was an error:', error); // Handling errors
    }
  }
  
  fetchData();
  

//   Explanation:

// In an async function, await pauses the function until the fetch request is complete.
// try-catch is used to handle any errors (such as network failures or invalid JSON parsing).



// Example of Error Handling with .catch() (fetch()):

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handling the fetched data
  })
  .catch(error => {
    console.error('There was an error:', error); // Handling errors
  });
