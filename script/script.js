let id;

//Écran 1
start.addEventListener("click", function() {
  screen2.style.display = "flex";
  screen1.style.display = "none";
  keyboard.focus();

  move(50)
  /*intervalID=window.setInterval(function() {
    time_display-- ;myBar = time_display
  if (time_display==1)
  {letter.textContent="GAME OVER";
  inGame = false;
  clearInterval(intervalID)
} },1000 );*/
}, false);

//Écran 2
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]

let inGame = true
let intervalID;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let elem = document.getElementById("myBar");

function move(delay) {
  clearInterval(id);
  id = setInterval(frame, delay);
  console.log(delay);
}

let width = 100

function frame() {
  if (width <= 1) {
    letter.textContent = "GAME OVER";
    inGame = false;
    /*  clearInterval(id);*/
  } else {
    width--;
    myBar.textContent = width
    elem.style.width = width + '%';
  }
}

let letter_display = alphabet[getRandomInt(alphabet.length)];
let time_display = 100
let timechange = time_display

myBar.textContent = width
letter.textContent = letter_display

let score_display = 0;
score.textContent = score_display;

let life = 3
let heartFull= document.getElementsByClassName("full")
let heartEmpty= document.getElementsByClassName("empty")

document.body.addEventListener("keydown", function(event) {
  console.log(event.key)

  if (event.key.toUpperCase() == letter_display && inGame == true) {
    letter_display = alphabet[getRandomInt(alphabet.length)];

    letter.textContent = letter_display
    score_display++
    score.textContent = score_display;
    width = 100

    if (score_display == 5) {
      move(45)
    } else if (score_display == 10) {
      move(40)
    } else if (score_display == 15) {
      move(35)
    } else if (score_display == 20) {
      move(30);
    } else if (score_display == 25) {
      move(25)
    } else if (score_display == 30) {
      move(20)
    } else if (score_display == 35) {
      move(15);
    } else if (score_display == 40) {
      move(10);
    }

  } else {
    life--;
    heartFull[life].style.display = "none";
    heartEmpty[life].style.display = "block";
    inGame = false;
    letter.textContent = "GAME OVER";
    clearInterval(intervalID);
    myBar = 1
  }
}, false)

let keyboard = document.createElement("input");
screen2.appendChild(keyboard);
keyboard.setAttribute("type", "text");
keyboard.style.opacity = 0
