// Wait for the DOM to finish loading before running the JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Function to set the initial background color based on the color inputs
  const initialColors = () => {
  const color1Input = document.querySelector("#color1");
  const color2Input = document.querySelector("#color2");

  if (color1Input && color2Input) {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    document.querySelector("body").style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  }
};


  // Call the initialColors function
  initialColors();

  // Get the random button
  const randomButton = document.querySelector("#random");
  // Add a click event listener to the random button
  randomButton.addEventListener("click", function() {
    // Generate two random colors
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    // Update the color inputs with the random colors
    document.querySelector("#color1").value = color1;
    document.querySelector("#color2").value = color2;
    // Update the background color
    document.querySelector("body").style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  });
});

// Function to generate a random color string in the format "#RRGGBB"
function getRandomColor() {
  // The possible characters for each color component
  const letters = "0123456789ABCDEF";
  let color = "#";
  // Generate a random color string by picking random characters from the `letters` string
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
