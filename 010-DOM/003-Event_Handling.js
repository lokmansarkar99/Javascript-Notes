// Event Handling
// JavaScript allows you to handle various events triggered by user actions, such as clicking, keypress, or mouse events.

// Click Event

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});


// Keypress Event

document.addEventListener('keypress', function(event) {
    console.log('Key pressed: ' + event.key); // Logs the key that was pressed
  });
  

  const element = document.getElementById('myElement');


//   Mouse Events

// Mouse Over
element.addEventListener('mouseover', function() {
  console.log('Mouse is over the element!');
});

// Mouse Out
element.addEventListener('mouseout', function() {
  console.log('Mouse left the element!');
});
