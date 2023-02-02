var cssDisplay = document.querySelector("h3");
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var bodyElement = document.getElementById("gradient");
var randomButtonElement = document.createElement("button");

function updateGradient() {
  bodyElement.style.background = 
  "linear-gradient(to right, " 
  + colorInput1.value 
  + ", " 
  + colorInput2.value 
  + ")";

  cssDisplay.textContent = bodyElement.style.background + ";";
}

colorInput1.addEventListener("input", updateGradient);
colorInput2.addEventListener("input", updateGradient);

window.addEventListener("load", updateGradient);

randomButtonElement.textContent = "Random";
randomButtonElement.addEventListener("click", function() {
  colorInput1.value = generateRandomColor();
  colorInput2.value = generateRandomColor();
  updateGradient();
});

document.body.appendChild(randomButtonElement);

function generateRandomColor() {
  var hexLetters = "0123456789ABCDEF";
  var randomColor = "#";
  for (var i = 0; i < 6; i++) {
    randomColor += hexLetters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}
