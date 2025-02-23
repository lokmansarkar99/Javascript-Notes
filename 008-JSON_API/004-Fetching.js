// Fetching JSON Data
// To fetch JSON data from a remote server or API, you can use the fetch() API. It is an asynchronous method that retrieves resources from a network.

// Fetching data from an API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log(data); // Handling the fetched data
  })
  .catch(error => {
    console.log('Fetch error:', error); // Handling errors
  });

