// Create an array of different colours and then add a ‘click' event listener to the button.
// Once the button is clicked, a different background colour should appear.

// Create and array of colours.

const colours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// I need to select the button and assign it to a variable:
const button = document.querySelector("button");
// I also need to select the body of the index.html since that's what I want to change colour.
const body = document.querySelector("body");

// I need to now create a function which will change the colour of the page.
// This function will be called in the event listener code.
// I had to cheat and read the answer at this stage - I know how to add event listener,
// but I had no idea about assigning the strings in the array to actual colours.
// I need to use ParseInt, so I watched a youtube tutorial on how to use it correctly.
function changeBackground() {
  const colourIndex = parseInt(Math.random() * colours.length);
  body.style.backgroundColor = colours[colourIndex];
}

// Now add ane event listener to that button variable, which calls on the function above:
button.addEventListener("click", changeBackground);
// body.style.backgroundColor = "violet";
// // Event Listener to change button text:
// button.addEventListener("click", function (e) {
//   e.target.textContent = "Testing the click event works";
// });
