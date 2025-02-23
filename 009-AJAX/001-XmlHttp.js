// XMLHttpRequest
// XMLHttpRequest is a JavaScript object that allows you to send HTTP requests and receive responses from a server asynchronously. It is often used in AJAX (Asynchronous JavaScript and XML) to interact with APIs.

// Creating a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configuring the request
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// Setting up a callback to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // If the request is successful, parse the response as JSON
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // Handling non-2xx status codes
    console.log("Request failed with status: " + xhr.status);
  }
};

// Handling request errors
xhr.onerror = function () {
  console.log("Request failed");
};

// Sending the request
xhr.send();


// Explanation:

// xhr.open() configures the request with a method (GET), a URL, and whether it should be asynchronous (true).
// xhr.onload is called when the request completes successfully, and we check the status code to ensure it's successful.
// xhr.send() sends the request to the server.