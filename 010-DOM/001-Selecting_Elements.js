// Selecting Elements
// To interact with elements in the HTML document, we can use several methods to select elements. The most common methods include:

// getElementById
// This method is used to select an element by its id attribute.

// const element = document.getElementById('myElement');
// console.log(element); // Logs the element with the ID 'myElement'


// querySelector
// This method selects the first element that matches a CSS selector.

// const element = document.querySelector('.myClass');
// console.log(element); // Logs the first element with the class 'myClass'


// querySelectorAll
// This method selects all elements that match a CSS selector and returns a NodeList.

// const elements = document.querySelectorAll('div.myClass');
// console.log(elements); // Logs all div elements with the class 'myClass'


// getElementsByClassName
// This method selects all elements that have a specific class attribute.

// const elements = document.getElementsByClassName('myClass');
// console.log(elements); // Logs a live HTMLCollection of elements with the class 'myClass'


// getElementsByTagName
// This method selects all elements with a specific tag name.

// const elements = document.getElementsByTagName('p');
// console.log(elements); // Logs a live HTMLCollection of <p> elements


