// Sets the main color of black in a variable
let color = "black";
// Set the click as tru to start off with in the code which want be changed
let click = true;
// Created a function to populate the board based on the input passed into it
function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}  , 1fr)`;
// Takes the size  passed in and creates the board with the coloring
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

// Function to change the size and return an error if size is too big
function changeSize(input) {
  if (input > 2 && input < 100) {
    populateBoard(input);
    document.querySelector(".error").textContent = "";
  } else {
  document.querySelector(".error").textContent = "Please chose a number between 2 and 100!";}
}
  



// Function to select the background color with either the color variable or the random color
function colorSquare() {
  if (click == true) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
// Passes the changeColor function when used by the button
function changeColor(choice) {
  color = choice;
}
//Reset the board back to white when button is clicked
function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
//Selects the body and uses an event listener to only switch drawing modes when the board is clicked and not the buttons themselves
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
// Populates the board by 16 x 16
populateBoard(16);