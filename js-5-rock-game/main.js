let userChooseDisplay = document.getElementById("user-choose");
let compChooseDisplay = document.getElementById("comp-choose");
let result = document.getElementById("result");
let userScoreDisplay = document.getElementById("user-score");
let compScoreDisplay = document.getElementById("comp-score");
let btn = document.getElementById("btn");
let possibles = document.querySelectorAll("i");
let userChoose,
  compChoose,
  userScore = 0,
  compScore = 0;

possibles.forEach((possible) =>
  possible.addEventListener("click", (e) => {
    userChoose = e.target.id;
    userChooseDisplay.innerText = userChoose;
    compChoose = compChooseGen();
    compChooseDisplay.innerHTML = compChoose;
    playGame(userChoose, compChoose);
  })
);
function compChooseGen() {
  const choose = ["rock", "papper", "scissor"];
  let index = Math.floor(Math.random() * choose.length);
  return choose[index];
}

function playGame(user, comp) {
  if (user === comp) {
    result.innerHTML = "Draw";
  } else if (
    (user === "rock" && comp === "scissor") ||
    (user === "papper" && comp === "rock") ||
    (user === "scissor" && comp === "papper")
  ) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    result.style.color = 'orange'
    result.innerHTML = "You Win!!!";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    result.style.color = 'red'
    result.innerText = "You Lost!!!";
  }
}

btn.addEventListener("click", function () {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
  userChooseDisplay.innerText = 'No Choose'
  compChooseDisplay.innerText = 'No Choose'
  result.innerText = ''
});
