// fetch() API
// The fetch() API is a modern and simpler way to make HTTP requests. It returns a Promise and allows you to handle responses asynchronously. It replaces XMLHttpRequest in most cases.


// Making a GET request using fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsing the JSON data from the response
  })
  .then(data => {
    console.log(data); // Handling the response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error); // Handling errors
  });


//   Explanation:

// fetch() initiates the request and returns a Promise.
// .then(response => response.json()) converts the response to JSON.
// .catch() handles any errors that occur during the fetch operation.