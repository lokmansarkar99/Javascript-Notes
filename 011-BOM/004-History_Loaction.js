// The history & location Objects
// history Object
// The history object allows you to interact with the browser's history (i.e., the back and forward buttons) to navigate between pages or maintain a single-page application (SPA).

// Example: Using history object


// Go back one page in history
history.back();

// Go forward one page in history
history.forward();

// Go to a specific page in history (index 0 refers to the first page)
history.go(0); // Refresh the page




// location Object
// The location object provides information about the current URL and allows you to manipulate it, such as redirecting to a new URL or changing the page hash.

// Example: Using location object

// Get current URL
console.log(location.href); // Current URL

// Redirect to another URL
location.href = 'https://www.example.com';

// Change the URL hash (used for page navigation)
location.hash = 'section2'; // Changes URL to include #section2

// Reload the page
location.reload(); // Reloads the current page
