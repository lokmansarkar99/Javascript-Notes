// setTimeout() & setInterval()
// setTimeout()
// The setTimeout() function is used to execute a function after a specified delay (in milliseconds).

// Example: Using setTimeout()

// Run a function after 3 seconds (3000 milliseconds)
setTimeout(function() {
    console.log("This message appears after 3 seconds.");
  }, 3000);




//   setInterval()
// The setInterval() function is used to execute a function repeatedly at specified intervals (in milliseconds).

// Example: Using setInterval()

// Log a message every 2 seconds (2000 milliseconds)
const intervalId = setInterval(function() {
    console.log("This message appears every 2 seconds.");
  }, 2000);
  
  // Stop the interval after 10 seconds
  setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped after 10 seconds.");
  }, 10000);
  

  