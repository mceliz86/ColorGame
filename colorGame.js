var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var colors = generateRandomColors(numSquares);

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  //mode buttons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      numSquares = this.textContent === "Facil" ? 3 : 6;
      reset();
    });
  }
}

function setupSquares() {
  //squares event listeners, logic of "correct" and "try again"
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correcto!";
        resetButton.textContent = "Nuevo juego";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Elige otro color";
      }
    });
  }
}

function reset() {
  h1.style.backgroundColor = "steelblue";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "Nuevos colores";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    // arr[i]=randomColor();
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
