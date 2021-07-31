"use strict";
let scoreCount;
let player1Score;
let player2Score;
//checking eventListener on btn--new:
document.querySelector(".btn--new").addEventListener("click", newGame);

//#newGame: function()
function newGame() {
  //clear previous data:
  scoreCount = 0;
  player1Score = 0;
  player2Score = 0;
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.body.style.backgroundColor = "#793809";
  document.getElementById("score--0").innerText = scoreCount;
  document.getElementById("score--1").innerText = scoreCount;
  document.getElementById("current--0").innerText = scoreCount;
  document.getElementById("current--1").innerText = scoreCount;
  document.querySelector(".dice").classList.add("hidden");
  //remove classes:
  document.querySelector(".btn--roll").classList.remove("hidden");
  document.querySelector(".btn--hold").classList.remove("hidden");
  document.querySelector(".btn--new").classList.remove("idle");

  //Dice #button
  document.querySelector(".btn--roll").addEventListener("click", rollDice);
}
//#rollDice: function()
function rollDice() {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  //logic; checking for player Switch:
  if (randomNumber !== 1) {
    // rejected switch player block
    switch (randomNumber) {
      case 2:
        scoreCount += 2;
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".dice").src = "dice-2.png";
        break;
      case 3:
        scoreCount += 3;
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".dice").src = "dice-3.png";
        break;
      case 4:
        scoreCount += 4;
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".dice").src = "dice-4.png";
        break;
      case 5:
        scoreCount += 5;
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".dice").src = "dice-5.png";
        break;
      case 6:
        scoreCount += 6;
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".dice").src = "dice-6.png";
        break;
    }
    if (
      document.querySelector(".player--0").classList.contains("player--active")
    ) {
      document.getElementById("current--0").textContent = scoreCount;
    } else {
      document.getElementById("current--1").textContent = scoreCount;
    }
  } else {
    //switch player block
    scoreCount = 0;
    if (
      document.querySelector(".player--0").classList.contains("player--active")
    ) {
      document.getElementById("current--0").textContent = scoreCount;
      document.querySelector(".player--0").classList.remove("player--active");
      document.querySelector(".player--1").classList.add("player--active");
    } else {
      document.getElementById("current--1").textContent = scoreCount;
      document.querySelector(".player--1").classList.remove("player--active");
      document.querySelector(".player--0").classList.add("player--active");
    }
    document.querySelector(".dice").classList.remove("hidden");
    document.querySelector(".dice").src = "dice-1.png";
  }
}
//checking eventListener on btn--hold:
document.querySelector(".btn--hold").addEventListener("click", hold);
//#hold: function()
function hold() {
  document.querySelector(".dice").classList.add("hidden");
  if (
    document.querySelector(".player--0").classList.contains("player--active")
  ) {
    player1Score += scoreCount;
    document.getElementById("score--0").textContent = player1Score;
  } else {
    player2Score += scoreCount;
    document.getElementById("score--1").textContent = player2Score;
  }
  let currentPlayerScore = Number(
    document.querySelector(".player--active").children[1].textContent
  );
  if (currentPlayerScore >= 100) {
    document.querySelector(".btn--roll").classList.add("hidden");
    document.querySelector(".btn--hold").classList.add("hidden");
    document.querySelector(".btn--new").classList.add("idle");
    document.body.style.backgroundColor = "#1ccba0";
    document.querySelector(".player--active").children[0].textContent =
      "WINNER";
    document.querySelector(".player--active").children[1].textContent =
      currentPlayerScore + scoreCount;
  } else {
    console.log("continue");
    if (
      document.querySelector(".player--0").classList.contains("player--active")
    ) {
      document.querySelector(".player--0").classList.remove("player--active");
      document.querySelector(".player--1").classList.add("player--active");
      document.getElementById("current--0").textContent = 0;
    } else {
      document.querySelector(".player--1").classList.remove("player--active");
      document.querySelector(".player--0").classList.add("player--active");
      document.getElementById("current--1").textContent = 0;
    }
    scoreCount = 0;
  }
}
