let selectedNumber = null;
let selectedBoardNumber = null;
let mistake = 0;
const mistakeDisplay = document.querySelector(".mistakes");

const starter = [
  "2---46---",
  "1-78-9---",
  "--4-6----",
  "2---6-8-1",
  "--3-5-7-9",
  "-56----23",
  "6-------5",
  "78----4-6",
  "8---3-5-7",
];

const answer = [
  "234567891",
  "123456789",
  "456789123",
  "678912345",
  "789123456",
  "891234567",
  "234567891",
  "123456789",
  "456789123",
];

function setupGame() {
  for (let i = 1; i < 10; i++) {
    const number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", select);
    document.querySelector(".numbers").append(number);
    number.classList.add("number");
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const space = document.createElement("div");
      space.addEventListener("click", addAnswer);
      space.setAttribute("id", answer[r][c]);
      if (starter[r][c] != "-") {
        space.innerText = starter[r][c];
        space.classList.add("starter");
      }
      space.classList.add("space");
      if (c == 2 || c == 5) {
        space.classList.add("vertical");
      }
      if (r == 2 || r == 5) {
        space.classList.add("horizontal");
      }
      document.querySelector(".board").append(space);
    }
  }
}

function select() {
  if (selectedNumber != null) {
    selectedNumber.classList.remove("selected-number");
  }
  selectedNumber = this;
  this.classList.toggle("selected-number");
  console.log(selectedNumber);
}

function addAnswer() {
  if (!this.classList.contains("starter") && selectedNumber != null) {
    if (this.id === selectedNumber.innerText) {
      this.innerText = selectedNumber.innerText;
    } else {
      mistake += 1;
      console.log(mistake);
      mistakeDisplay.innerText = mistake.toString();
    }
  }
}

setupGame();
