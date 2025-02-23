// Handling API Responses
// API responses can be handled differently based on the response format and the status of the request. Common response formats are JSON, text, and Blob.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsing JSON response
  })
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title); // Displaying each post title
    });
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });


//   Explanation:

// After receiving the response, .json() is used to parse the JSON data.
// You can then work with the data (e.g., displaying the posts).

//Example of Handling Text Response:

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Parsing text response
    })
    .then(text => {
        console.log(text); // Displaying the text response
    })
    .catch(error => {
        console.error('Error fetching post:', error);
    });