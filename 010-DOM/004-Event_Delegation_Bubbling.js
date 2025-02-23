// Event Delegation & Bubbling
// Event delegation is a technique where you attach an event listener to a parent element and let it handle events for child elements. This reduces the number of event listeners and is useful for dynamically added elements.

// Event Bubbling
// When an event is triggered on an element, it first triggers on that element, then bubbles up to its parent elements. You can stop the bubbling by using event.stopPropagation().


const button = document.getElementById('myButton');

// Adding a click event listener to the button
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  event.stopPropagation(); // Stops the event from bubbling to parent elements
});

// Adding a click event listener to the parent element
const parent = document.getElementById('parent');
parent.addEventListener('click', function() {
  console.log('Parent clicked!');
});


// Explanation:

// If the button is clicked, it will log "Button clicked!" and stop the event from bubbling to the parent.
// If the parent is clicked, it will log "Parent clicked!" unless the event is stopped by the button's handler.







// Event Delegation Example

// Attaching a click event to the parent element
// const parent = document.getElementById('parent');

// parent.addEventListener('click', function(event) {
//   // Check if the clicked element is a button
//   if (event.target.tagName === 'BUTTON') {
//     console.log('Button clicked: ' + event.target.textContent);
//   }
// });



// Explanation:

// Instead of attaching an event listener to each button, we attach it to the parent element.
// When any button inside the parent is clicked, the event handler checks if the clicked element is a button and handles the event accordingly.