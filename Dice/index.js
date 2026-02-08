rollDice();

document.querySelector(".btn").addEventListener("click", function () {
  buttonAnimation();
  rollDice();
});

document.addEventListener("keydown", function (event) {
  buttonAnimation();
  var btn = event.key;
  if (btn === "Enter" || btn === " ") {
    rollDice();
  }
});

function rollDice() {
  var title = document.querySelector("h1");

  var btn = document.querySelector(".btn");
  var randomNo1 = Math.floor(Math.random() * 6 + 1);
  var randomImg1 = "./images/dice" + randomNo1 + ".png";
  var randomNo2 = Math.floor(Math.random() * 6 + 1);
  var randomImg2 = "./images/dice" + randomNo2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImg1);
  document.querySelector(".img2").setAttribute("src", randomImg2);

  if (randomNo1 > randomNo2) {
    title.textContent = "🚩Player 1 Wins";
  } else if (randomNo2 > randomNo1) {
    title.textContent = "Player 2 Wins🚩";
  } else {
    title.textContent = "TIE!";
  }

  setTimeout(function () {
    if (
      (randomNo1 === 2 && randomNo2 === 4) ||
      (randomNo2 === 2 && randomNo1 === 4)
    ) {
      document.body.style.backgroundImage =
        "url('./images/heart_background.png')";

      setTimeout(function () {
        alert("❤️Seni çok seviyoruum❤️");
      }, 100);

      setTimeout(function () {
        document.body.style.backgroundImage = "none";
      }, 3000);
    }
  }, 50);
}

function buttonAnimation() {
  var activeButton = document.querySelector(".btn");
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
