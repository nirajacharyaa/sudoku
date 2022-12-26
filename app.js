let selectedNumber = null;
let selectedBoardNumber = null;
let mistake = 0;
const mistakeDisplay = document.querySelector(".mistakes");

const starter = [
  "8-5---9--",
  "-9-8----1",
  "--7--3---",
  "---1-4---",
  "12----4--",
  "7-82-----",
  "6-5--1---",
  "----45---",
  "3-4-6-1-5",
];

const answer = [
  "835416927",
  "296857431",
  "417293658",
  "569134782",
  "123678495",
  "748259316",
  "625781394",
  "981345276",
  "374962185",
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
}

function addAnswer() {
  if (!this.classList.contains("starter") && selectedNumber != null) {
    if (this.id === selectedNumber.innerText) {
      this.innerText = selectedNumber.innerText;
    } else {
      mistake += 1;
      mistakeDisplay.innerText = mistake.toString();
    }
  }
}

setupGame();
